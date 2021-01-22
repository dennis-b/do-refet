from classes.project import Project
from datetime import datetime
import json
from flask import request

class Refet:
    def __init__(self, db):

        self._db  = db
        self._projects = {}
        self._read_projects_from_db()

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
        pr._start_date = datetime.strptime(start_date, "%Y-%m-%dT%H:%M:%S").date()
        pr._end_date = datetime.strptime(end_date, "%Y-%m-%dT%H:%M:%S").date()
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

        json_string =  json.dumps( list(self._projects.values()), default=lambda o: o.__dict__ if not  isinstance(o, datetime) else o.isoformat() ,
                          sort_keys=True, indent=4)
        return  json_string


    def add_projectR(self):
         r =request.json
         start_date = r['startDate']
         end_date = r['endDate']

         id = self.add_project(r['name'], equity = r['equity'], currency=r['currency'], irr = r['irr'],
                          start_date = datetime.strptime(start_date, "%Y-%m-%dT%H:%M:%S").date(),
                          end_date= datetime.strptime(end_date, "%Y-%m-%dT%H:%M:%S").date() )
         return json.dumps({'ok': True, 'id':str(id)})
