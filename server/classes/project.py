
from datetime import datetime
from classes.currency import get_currency
import json
from json import JSONEncoder

class Project:

    def __init__(self, name="", equity = 0, currency='nis', irr = 0, description = "",operator="", type="", start_date = datetime.now(), end_date = None):
        self._name = name
        self._irr = irr
        self._start_date = start_date
        self._end_date = end_date
        self._equity = equity
        self._currency = currency
        self._operator = operator
        self._type = type
        self._description = description
        self._id = ""


    def value(self, date):
        if date < self._start_date:
            return 0
        if date> self._end_date:
            date =self._end_date

        durration = ((date-self._start_date).days)/364
        valueIrr = durration *self._irr
        increase = self._equity*(valueIrr/100)
        value = self._equity+increase
        return value

    def load_from_db(self, proj):

        self._name = proj.name
        self._start_date = proj.start_date
        self._end_date = proj.end_date
        self._equity = proj.start_equity
        self._irr = proj.irr
        self._currency = proj.currency
        self._id = str(proj.id)
        self._description = proj.description
        self._operator = proj.operator
        self._type = proj.type



    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__ if not  isinstance(o, datetime) else o.isoformat() ,
                          sort_keys=True, indent=4)



if __name__=="__main__":

    p = Project("test", equity=60000, currency="usd", irr=11.5, start_date=datetime(2020,1,1), end_date= datetime(2023,1,1))
    s = p.toJSON()
    print(s)
    #s = json.dump(p, fp = open("pr.json", 'w'))
    #print(s)
    #p.value(datetime.now())






