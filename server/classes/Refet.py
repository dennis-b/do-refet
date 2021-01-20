from classes.project import Project
from datetime import datetime
import json
from flask import request

class Refet:
    def __init__(self, db):

        self._db  = db
        self._projects = []
        self._read_projects_from_db()

    def _read_projects_from_db(self):
        from models import Project as aProject

        for post in aProject.objects:
            pr = Project()
            pr.load_from_db(post)
            self._projects.append(pr)

    def get_value(self, date):
        val = 0
        for pr in self._projects:
            val += pr.value(date)
        return val

    def add_project(self, name="", equity = 0, currency='nis', irr = 0, start_date = datetime.now(), end_date = None):
        pr = Project(name, equity, currency, irr , start_date , end_date )
        self._projects.append(pr)
        id = self._db.save_project(pr)
        return id


    def project(self):
        if request.method == 'POST':
            return self.add_projectR()
        elif request.method == 'GET':
            return self.getProjectsJson()
        raise NotImplementedError("only get and post are supported")


    def getProjectsJson(self):
        '''
        get all projects in json format
        :return:
        '''

        json_string =  json.dumps( self._projects, default=lambda o: o.__dict__ if not  isinstance(o, datetime) else o.isoformat() ,
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