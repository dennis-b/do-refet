from mongoengine import connect
from models import Project, Refet
from datetime import datetime




class Database:

    def __init__(self):
        host = "mongodb+srv://dorefetuser:dorefetpass@clusterdev.ypvoi.mongodb.net/dorefet?retryWrites=true&w=majority"
        connect("dorefet", host=host, alias="default")

    def save_refet(self, refet):
        project_ids = list(refet._projects.keys())

        refet = Refet( goal = refet._goal, users = refet._users,  goal_currency = refet._goal_currency,
                       project_ids = project_ids )
        refet.save()

    def save_project(self, project):
        '''

        :param project:
        :return: project id in the database
        '''
        project = Project(name=project._name, start_date=project._start_date, end_date=project._end_date, irr=project._irr,
                          start_equity=project._equity, currency=project._currency, type = project._type, description = project._description )

        project.save()
        return project.id

    def update_project(self, project):

        for pr in Project.objects:
            if str(pr.id) == project._id:
                pr.name = project._name
                pr.start_date = project._start_date
                pr.end_date = project._end_date
                pr.irr = project._irr
                pr.equity = project._equity
                pr.currency = project._currency
                pr.type = project._type
                pr.description = project._description
                pr.operator = project._operator

                pr.save()
                return True
        return False


    

#
#
# def init_db():
#     # Create the fixtures
#
#
#
#     project = Project(name="Test2", start_date=datetime(2020, 1, 1), end_date=datetime(2023, 1, 1), irr=10.,
#                       start_equity=60000, currency='usd')
#     project.save()
#     # engineering = Department(name="Engineering")
#     # engineering.save()
#     #
#     # hr = Department(name="Human Resources")
#     # hr.save()
#     #
#     # manager = Role(name="manager")
#     # manager.save()
#     #
#     # engineer = Role(name="engineer")
#     # engineer.save()
#     #
#     # debug = Task(name="Debug")
#     # test = Task(name="Test")
#     #
#     # tracy = Employee(name="Tracy", department=hr, roles=[engineer, manager], tasks=[])
#     # tracy.save()
#     #
#     # peter = Employee(
#     #     name="Peter",
#     #     department=engineering,
#     #     leader=tracy,
#     #     roles=[engineer],
#     #     tasks=[debug, test],
#     # )
#     # peter.save()
#     #
#     # roy = Employee(
#     #     name="Roy",
#     #     department=engineering,
#     #     leader=tracy,
#     #     roles=[engineer],
#     #     tasks=[debug],
#     # )
#     # roy.save()
