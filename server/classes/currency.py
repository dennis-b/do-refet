import requests
from  datetime import datetime
from server.models import Rates
from mongoengine import connect
from datetime import datetime,date

API_REQ = 'http://data.fixer.io/api/latest?access_key=d02e456aa4348bde33d4e8bf8e5b94aa'

def getRatesOnDate(date):
    req = API_REQ.replace('latest', '{}-{}-{}'.format(date.year, date.month if date.month >=10 else "0"+str(date.month),
                                                      date.day if date.day >=10 else "0"+str(date.day)))
    r = requests.get(req)
    response = r.json()
    if not response['success']:
        raise Exception("cannot get rates")
    if response['base'] != 'EUR':
        raise Exception("unexpected base rate, expected EUR got {}".format(response['base']))
    nisRates = {}
    rates = response['rates']
    nisRate = rates['ILS']
    nisRates['EUR'] = nisRate
    nisRates['USD'] = nisRate/rates['USD']
    return nisRates


# def _updateRates(self):
#     r = requests.get(API_REQ)
#     response = r.json()
#     if not response['success']:
#         raise Exception("cannot get rates")
#     if response['base'] != 'EUR':
#         raise Exception("unexpected base rate, expected EUR got {}".format(response['base']))
#     nisRates = {}
#     rates = response['rates']
#     nisRate = rates['ILS']
#     for curr, val in rates.items():
#         nisRates[curr] = nisRate / val
#     nisRates['EUR'] = nisRate
#     return nisRates

class CurrencyConverter:

    def _load_from_db(self):
        from server.models import Rates
        rates = {}
        for rate in Rates.objects:
            date = rate.date
            rates[date] = rate.rates
        return rates

    def __init__(self):
        self._base = 'ILS'
        self._rates = self._load_from_db()

    def getRatesOnDate(self, date):
        if date not in self._rates:
            rates = getRatesOnDate(date)
            self._rates[date] = rates
            rate = Rates(date=date, rates=rates)
            rate.save()
        return self._rates[date]


    def convert(self,  amount, dateIn,  from_curr, to_curr = 'ILS'):
        if type(dateIn) == date:
            dateIn = datetime.fromordinal(dateIn.toordinal())
        else:
            dateIn = dateIn.replace(hour=0, minute=0, second=0, microsecond=0)
        if from_curr == to_curr:
            return amount
        rates = self.getRatesOnDate(dateIn)
        from_curr = from_curr.upper()
        to_curr = to_curr.upper()
        from_curr_valid = from_curr == 'ILS'  or  from_curr  in rates
        to_curr_valid = to_curr == 'ILS'  or  to_curr  in rates
        if not from_curr_valid or not to_curr_valid:
            raise Exception("Invalid currency {}, {}".format(from_curr, to_curr))
        if to_curr == 'ILS':
            return amount*rates[from_curr]
        else:
            r =  rates[from_curr]/rates[to_curr]
            return amount * r


def loadCurrenciesToDB( start_date):

    connect("do-refet", host="mongodb://localhost:27017", alias="default")
    from dateutil.relativedelta import relativedelta
    dt = start_date
    endDate = datetime.now()
    while dt <= endDate:
        print(dt)
        rate = Rates(date = dt, rates= getRatesOnDate(dt))
        rate.save()
        dt += relativedelta(days=1)



if __name__ == "__main__":
    loadCurrenciesToDB(datetime(2020,1,1))

    c = CurrencyConverter()
    dtiils=c.convert(1,'USD')
    dollartoeur=c.convert(1,'USD', 'EUR')
    print("")
