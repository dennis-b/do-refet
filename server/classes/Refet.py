
from classes.project import Project
from datetime import datetime
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
        self._db.save_project(pr)
