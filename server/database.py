from mongoengine import connect
from models import Project
from datetime import datetime




class Database:

    def __init__(self):
        connect("graphene-mongo-example", host="mongodb://localhost:27017", alias="default")

    def save_project(self, project):
        project = Project(name=project._name, start_date=project._start_date, end_date=project._end_date, irr=project._irr,
                          start_equity=project._equity, currency=project._currency)

        project.save()

    

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
