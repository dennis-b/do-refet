import React from "react";

import { StTextFieldContainer, StTextFieldErrors } from "./styled";
import { FormikProps } from "formik";
import { BaseTextField } from "./BaseTextField";

export interface TextFieldProps {
    name: string;
    formikProps: FormikProps<any>;
    label: string;
    type?: string;
    inputImage: any
    autoFocus?: boolean
    margin?: string
    validateManually?: boolean
}

export function TextFieldWithImage(
    {
        name,
        type = 'text',
        margin = '40px',
        label,
        inputImage: InputImage,
        autoFocus,
        formikProps: { values, handleChange, setFieldTouched, touched, errors }
    }: TextFieldProps) {

    const value = values[name];

    const change = (e: any) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    const hasError = touched[name] && Boolean(errors[name])

    return (
        <StTextFieldContainer margin={margin}>
            <BaseTextField
                type={type}
                name={name}
                hasError={hasError}
                autoFocus={autoFocus}
                label={label}
                onChange={change}
                value={value}
                InputProps={{
                    startAdornment: (<InputImage />)
                }}
            />
            {
                hasError && <StTextFieldErrors>{errors[name]}</StTextFieldErrors>
            }
        </StTextFieldContainer>
    )
}

