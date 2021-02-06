from classes.project import Project
from datetime import datetime, date
#import json
from flask import request
from dateutil.relativedelta import *
from flask import json as flaskJson
from classes.currency import CurrencyConverter
import logging

def parseDate(dateStr):
    return datetime.strptime(dateStr, "%Y-%m-%dT%H:%M:%S.%fZ")

def makeResponse(jsonStr, app):
    response = app.response_class(
        response=jsonStr,
        status=200,
        mimetype='application/json'
    )
    return response

class Refet:

    def _read_refet_from_db(self, refet_id):
        from models import Refet as aRefet
        for refet in aRefet.objects:
           if str(refet.id) ==refet_id:
            self._goal = refet.goal
            self._goal_currency = refet.goal_currency
            self._users = refet.users
            projectsIds = refet.project_ids
            return projectsIds
        logging.error("could not find refet with id {}".format(refet_id))
        return []


    def __init__(self, db, app):
        self._db  = db
        self._converter = CurrencyConverter()
        self._projects = {}
        self._app = app
        self._users = []
        self._goal = 0
        self._goal_currency = 'ILS'
        self._id = ""



    def initFromDb(self, refet_id):
        if self._id == refet_id:
            return
        self._id = refet_id
        project_ids  = self._read_refet_from_db(refet_id)
        self._read_projects_from_db(project_ids)

    def tazrim(self, date, currency = 'ILS'):
        v = 0
        for p in self._projects:
            pVal = p.tazrim(date)
            v += self._converter.convert(pVal, p.currency, currency)
        return v

    def _read_projects_from_db(self, project_ids):
        from models import Project as aProject

        for project in aProject.objects:
            if str(project.id) not in project_ids:
               continue
            pr = Project(self._converter)
            pr.load_from_db(project)
            self._projects[pr._id] = pr


    def get_value(self, date, currency = 'ILS'):
        val = 0
        for pr in self._projects.values():
            tempVal = pr.value(date, currency)
            val += tempVal
        return val

    def get_invested_value(self, date, currency = 'ILS'):
        val = 0
        for pr in self._projects.values():
            tempVal = pr.invested_value( date, currency )
            val += tempVal
        return val



    def add_project(self, name="", equity = 0, currency='ILS', irr = 0, description="", operator = "", type="", start_date = datetime.now(), end_date = None):
        pr = Project(self._converter,name, equity, currency, irr , description,operator, type, start_date , end_date )

        id = self._db.save_project(pr)
        pr._id = str(id)
        self._projects[pr._id] = pr
        return id

    def updateProject(self):
        from copy import deepcopy
        r = request.json
        id = r['id']
        start_date = r['startDate']
        end_date = r['endDate']
        if id not in self._projects:
            return makeResponse(flaskJson.dumps({'ok': False, 'error': 'id not found'}), self._app)
        pr = self._projects[id]
        savedPRoj = deepcopy(pr)
        pr._name = r['name']
        pr._equity = r['equity']
        pr._currency = r['currency']
        pr._irr = r['irr']

        pr._start_date = parseDate(start_date)
        pr._end_date = parseDate(end_date)
        updated = self._db.update_project(pr)
        if  updated:
            jsonStr =  flaskJson.dumps({'ok': True})
        else:
            jsonStr = flaskJson.dumps({'ok': False, 'error': 'id not found'})
            self._projects[id] = savedPRoj
        response =  makeResponse(jsonStr, self._app)
        return response


    def isValidUser(self, username):
        username in self._users


    def _getProjecStats(self):
        id = request.args['id']
        project = self._projects[id]
        stats = project.statsDict(self._converter)
        return stats

    def _getProjectParams(self):
        id = request.args['id']
        project = self._projects[id]
        jsonStr = project.toJSON()
        response = makeResponse(jsonStr, self._app)
        return response

    def project(self):
        if 'id' in request.args:
            return self._getProjectParams()
        else:
            if request.method == 'POST':
                return self.add_projectR()
            elif request.method == 'GET':
                return self.getProjectsJson()
            elif request.method == 'PUT':
                return self.updateProject()
            raise NotImplementedError("only get and post are supported")

    def getProjectsJson(self):
        '''
        get all projects in json format
        :return:
        '''
        def defaultFunc(o):
            if isinstance(o, datetime):
                return o.isoformat()+".000Z"
            elif isinstance(o, CurrencyConverter):
                return ''
            else:
                return o.__dict__
                

        jsonStr  = flaskJson.dumps(list(self._projects.values()), default=defaultFunc ,
                          sort_keys=True, indent=4)
        response =  makeResponse(jsonStr, self._app)
        return response

    def statsDict(self):
        stats = {}
        stats['currentValue'] = self.get_value(datetime.now())
        stats['valueGraph'] = self._valueGraph()
        stats['tazrim'] = self.tazrim(datetime.now())
        return stats

    def stats(self):
        '''
        :return: statistics
        '''

        if 'id' in request.args:
            stats =  self._getProjecStats()
        else:
            stats = self.statsDict()
        jsonStr =  flaskJson.dumps(stats)
        response = makeResponse(jsonStr, self._app)
        return response

    def _valueGraph(self):
        ret = []
        interval = 1
        projects = list(self._projects.values())
        projects = sorted(projects, key = lambda x: x._start_date)
        startDate = projects[0]._start_date #smallest start date
        endDate = datetime.now()
        dt = startDate
        while dt <= endDate:
            ret.append( { 'date' :dt.isoformat() +".000Z",
                          'value' : self.get_value(dt),
                          'invested_value' : self.get_invested_value(dt)})

            dt += relativedelta(months=+int(interval))
        ret.append({'date': endDate.isoformat() + "Z",
                    'value': self.get_value(endDate),
                    'invested_value': self.get_invested_value(endDate)})
        return ret

    #
    # def _investedValueGraph(self):
    #     ret = []
    #     interval = 1
    #     projects = list(self._projects.values())
    #     projects = sorted(projects, key=lambda x: x._start_date)
    #     startDate = projects[0]._start_date  # smallest start date
    #     endDate = datetime.now()
    #     dt = startDate
    #     while dt <= endDate:
    #         ret.append({'date': dt.isoformat() + ".000Z", 'value': self.get_invested_value(dt)})
    #         dt += relativedelta(months=+int(interval))
    #     ret.append({'date': endDate.isoformat() + "Z", 'value': self.get_invested_value(endDate)})
    #     return ret


    def add_projectR(self):
         r =request.json
         start_date = r['startDate']
         end_date = r['endDate']

         id = self.add_project(r['name'], equity = r['equity'], currency=r['currency'], irr = r['irr'], description=r['description'],
                               operator = r['operator'] if 'operator' in r else "",
                               type = r['type'] if 'type' in r else "",
                          start_date = parseDate(start_date),
                          end_date= parseDate(end_date) )
         jsonStr =  flaskJson.dumps({'ok': True, 'id':str(id)})

         response = makeResponse(jsonStr, self._app)
         return response
