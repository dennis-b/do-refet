import camelCase from "lodash/camelCase";
import moment from "moment";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

export const noop = () => {
}

export function toCamelCase(obj: any) {
    if (!obj) {
        return null
    }
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
        result[camelCase(key)] = value;
    }
    return result;
}

export function responseResolver(data: any) {
    if (Array.isArray(data)) {
        return data.map((item => toCamelCase(item)))
    }
    return toCamelCase(data)
}

export function normalizeGraphData(data: any[]) {
    return data.map(({ date, value }) => ({
        date: moment(date).format('DD/MM/YYYY'),
        value
    }))
}

export function datePickerLabel(date: MaterialUiPickersDate) {
    return moment(date).format('DD/MM/YYYY')
}

export const numberFormat = new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
});

export function containsNumber(str: string) {

    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        if (Number.isInteger(Number(item))) {
            return true
        }
    }
    return false;
}
