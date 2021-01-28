
from datetime import datetime
import json
from dateutil.relativedelta import *

class Project:

    def __init__(self, name="", equity = 0, currency='ILS', irr = 0, description = "",operator="", type="", start_date = datetime.now(), end_date = None):
        self._name = name
        self._irr = float(irr)
        self._start_date = start_date
        self._end_date = end_date
        self._equity = float(equity)

        self._currency = currency
        self._operator = operator
        self._type = type
        self._description = description
        self._id = ""
        self._equities_per_date = []


    def value(self, date):
        if date < self._start_date:
            return 0
        if date> self._end_date:
            date =self._end_date

        durration = ((date-self._start_date).days)/364
        if durration ==0:
            return self._equity
        valueIrr = durration *self._irr
        increase = self._equity*(valueIrr/100)
        value = self._equity+increase
        return value

    def _valueGraph(self):
        '''
        get project value in a graph
        :return: list of dictionaries of date, value
        '''
        ret = []


        if self._equities_per_date:
            vals =  [ {self._start_date:self._equity} ]+self._equities_per_date
            for v in vals:
                ret.append( { 'date' :list(v.keys())[0].isoformat() +".000Z", 'value' : list(v.values())[0]} )
            return ret

        interval = 1
        startDate = self._start_date #smallest start date
        endDate = datetime.now()
        dt = startDate
        while dt <= endDate:
            ret.append( { 'date' :dt.isoformat() +".000Z", 'value' : self.value(dt)})
            dt += relativedelta(months=+int(interval))
        ret.append({'date': endDate.isoformat() + ".000Z", 'value': self.get_value(endDate)})
        return ret

    def statsDict(self):
        '''
        get project statistics
        :return: dict of project statistics
        '''
        stats = {}
        stats['currentValue'] = self.value(datetime.now())
        stats['valueGraph'] = self._valueGraph()
        return stats


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
        self._equities_per_date =proj.equities_per_date



    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__ if not  isinstance(o, datetime) else o.isoformat() ,
                          sort_keys=True, indent=4)



if __name__=="__main__":

    p = Project("test", equity=60000, currency="USD", irr=11.5, start_date=datetime(2020,1,1), end_date= datetime(2023,1,1))
    s = p.toJSON()
    print(s)
    #s = json.dump(p, fp = open("pr.json", 'w'))
    #print(s)
    #p.value(datetime.now())






