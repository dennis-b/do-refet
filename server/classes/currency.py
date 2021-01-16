class Currency:
    def __init__(self, name):
        self._name = name


def get_currency(name):
    return Currency(name)