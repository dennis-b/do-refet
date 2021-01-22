from classes.project import Project
from datetime import datetime
import json
from flask import request
from dateutil.relativedelta import *


def parseDate(dateStr):
    return datetime.strptime(dateStr, "%Y-%m-%dT%H:%M:%S.%fZ")

class Refet:
    def __init__(self, db, app):

        self._db  = db
        self._projects = {}
        self._read_projects_from_db()
        self._app = app

    def _read_projects_from_db(self):
        from models import Project as aProject

        for post in aProject.objects:
            pr = Project()
            pr.load_from_db(post)
            self._projects[pr._id] = pr

    def get_value(self, date):
        val = 0
        for pr in self._projects.values():
            val += pr.value(date)
        return val

    def add_project(self, name="", equity = 0, currency='nis', irr = 0, start_date = datetime.now(), end_date = None):
        pr = Project(name, equity, currency, irr , start_date , end_date )

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
            return json.dumps({'ok': False, 'error': 'id not found'})
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
            ret =  json.dumps({'ok': True})
        else:
            ret = json.dumps({'ok': False, 'error': 'id not found'})
            self._projects[id] = savedPRoj

        return ret


    def project(self):
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
        from flask import jsonify
        from flask import json as flaskJson

        # json_string =  json.dumps( list(self._projects.values()), default=lambda o: o.__dict__ if not  isinstance(o, datetime) else o.isoformat() ,
        #                   sort_keys=True, indent=4)

        response = self._app.response_class(
            response=json.dumps(list(self._projects.values()), default=lambda o: o.__dict__ if not  isinstance(o, datetime) else o.isoformat() ,
                          sort_keys=True, indent=4),
            status=200,
            mimetype='application/json'
        )
        return response
        #g = jsonify(json_string)
        #return  g


    def stats(self):
        stats = {}
        stats['currentValue'] = self.get_value(datetime.now())
        return json.dumps(stats)


    def valueGraph(self):
        ret = {}
        start = request.args.get('startDate')
        end = request.args.get('endDate')
        interval = request.args.get('interval')
        startDate = parseDate(start)
        endDate = parseDate(end)
        dt = startDate
        while dt <= endDate:
            ret[dt.isoformat()] = self.get_value(dt)
            dt += relativedelta(months=+int(interval))


        return json.dumps(ret)





    def add_projectR(self):
         r =request.json
         start_date = r['startDate']
         end_date = r['endDate']

         id = self.add_project(r['name'], equity = r['equity'], currency=r['currency'], irr = r['irr'],
                          start_date = parseDate(start_date),
                          end_date= parseDate(end_date) )
         return json.dumps({'ok': True, 'id':str(id)})
