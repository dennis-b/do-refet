import React from 'react';
import {Autocomplete, AutocompleteRenderInputParams,} from 'formik-material-ui-lab';
import MuiTextField from '@material-ui/core/TextField';
import {Field} from 'formik';
import {countriesOptions} from "@utils/selectUtils";
import {Box} from "@material-ui/core";

interface Props {
    touched: any;
    errors: any;
    name: string;
    label: string;
}

function countryToFlag(code: string) {

    const countryCode = code.substring(0, 2)

    return typeof String.fromCodePoint !== 'undefined'
        ? countryCode
            .toUpperCase()
            .replace(/./g, (char: string) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : countryCode;
}


export const CurrencyAutoCompleteField = ({touched, errors, name, label}: Props) => {
    return (
        <Field
            name={name}
            component={Autocomplete}
            options={countriesOptions}
            fullWidth
            renderOption={(option: any) => (
                <React.Fragment>
                    <Box mr={1}>
                        <span>
                        {countryToFlag(option)}
                    </span>
                    </Box>
                    {option}
                </React.Fragment>
            )}
            renderInput={(params: AutocompleteRenderInputParams) => (
                <Box mt={'16px'}>
                    <MuiTextField
                        {...params}
                        error={touched[name] && !!errors[name]}
                        helperText={touched[name] && errors[name]}
                        label={label}
                    />
                </Box>
            )}
        />
    );
};
