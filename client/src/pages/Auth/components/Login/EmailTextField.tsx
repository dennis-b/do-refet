import React from "react";
import { InputAdornment } from "@material-ui/core";
import { AppAssets } from "@assets/index";
import { TextFieldWithImage } from "@components/TextField/TextFieldWithImage";
import { StBaseImage } from "@components/styled";


const EmailImage = () => <StBaseImage src={AppAssets.Icons.email} width={'20px'} height={'20px'} />


export function EmailTextField({ formikProps, autoFocus }: any) {
    return (
        <TextFieldWithImage
            name="email"
            label='EMAIL ADDRESS'
            formikProps={formikProps}
            inputImage={() => <InputAdornment position="start"><EmailImage /></InputAdornment>}
            autoFocus={autoFocus}
        />
    )
}
