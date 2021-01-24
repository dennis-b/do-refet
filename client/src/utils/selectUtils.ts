// @ts-ignore
import * as cc from 'country-code'
import * as _ from 'lodash'
import LocaleCurrency from 'locale-currency'

function associateCurrencies(countries: any[]) {
    return _.map(countries, country => ({
        ...country,
        currencyCode: LocaleCurrency.getCurrency(country.alpha2),
    }))
}

function countriesWithCurrency(countries: any[]) {
    return _.filter(countries, country => !!LocaleCurrency.getCurrency(country.alpha2))
}

export const countries = associateCurrencies(countriesWithCurrency(cc.countries))

export const countriesOptions = Array.from(new Set(countries.map(({currencyCode}) => currencyCode)));