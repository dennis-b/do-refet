from datetime import datetime
from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (
    DateTimeField,
    EmbeddedDocumentField,
    ListField,
    ReferenceField,
    StringField,
    FloatField,
    IntField,
    DictField
)


# class Department(Document):
#
#     meta = {"collection": "department"}
#     name = StringField()
#
#
# class Role(Document):
#
#     meta = {"collection": "role"}
#     name = StringField()
#
#
# class Task(EmbeddedDocument):
#
#     name = StringField()
#     deadline = DateTimeField(default=datetime.now)
#

class Project(Document):

    meta = {"collection": "project"}
    name = StringField()
    start_date = DateTimeField(default=datetime.now)
    end_date = DateTimeField(default=datetime.now)
    start_equity = IntField(min_value=0)
    irr = FloatField(min_value=0)
    currency  = StringField()
    type = StringField(default="")
    description = StringField(default="")
    operator = StringField(default="")
    equities_per_date = ListField( DictField())

    # department = ReferenceField(Department)
    # roles = ListField(ReferenceField(Role))
    # leader = ReferenceField("Employee")
    # tasks = ListField(EmbeddedDocumentField(Task))

class Refet(Document):
    meta = {"collection": "Refet"}
    users = ListField(ListField())
    goal = IntField()
    goal_currency = StringField()
    project_ids = ListField(StringField())

class Rates(Document):
    meta = {"collection": "Rates"}
    date = DateTimeField(default=datetime.now())
    base = StringField(default='ILS')
    rates = DictField()
