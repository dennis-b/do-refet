import React, { useState } from "react";
import { isEmpty } from "lodash";

import { StOutlinedInput } from "./styled";

interface BaseTextField {
    value: string;
    type?: string;
    name: string;
    label: string;
    onChange: any;
    autoFocus?: boolean;
    hasError?: boolean;
    InputProps?: any;
}

const getInputPadding = ({ startAdornment, endAdornment }: any) => {
    if (startAdornment) {
        return '10px 0 0 30px'
    }

    if (endAdornment) {
        return '10px 0 0 0'
    }

    return '10px 0'
}

export function BaseTextField(
    {
        value,
        type = 'string',
        name,
        label,
        onChange,
        autoFocus = false,
        hasError = false,
        InputProps = {},
    }: BaseTextField) {

    const [focused, setFocused] = useState<boolean>()
    const toggleFocused = () => setFocused(!focused);
    const padding = getInputPadding(InputProps)


    return (
        <StOutlinedInput
            padding={padding}
            showlabel={focused || !isEmpty(value) ? 'hide' : 'show'}
            type={type}
            name={name}
            haserror={hasError ? 'hasError' : undefined}
            autoFocus={autoFocus}
            label={label}
            onChange={onChange}
            value={value}
            variant="outlined"
            onFocus={toggleFocused}
            onBlur={toggleFocused}
            InputProps={InputProps}
        />
    )
}
