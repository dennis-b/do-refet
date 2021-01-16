from datetime import datetime
from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (
    DateTimeField,
    EmbeddedDocumentField,
    ListField,
    ReferenceField,
    StringField,
    FloatField,
    IntField
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

    # department = ReferenceField(Department)
    # roles = ListField(ReferenceField(Role))
    # leader = ReferenceField("Employee")
    # tasks = ListField(EmbeddedDocumentField(Task))
