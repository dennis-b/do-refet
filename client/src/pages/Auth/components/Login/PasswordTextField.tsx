import React from "react";
import { InputAdornment } from "@material-ui/core";
import { StBaseImage } from "@components/styled";
import { AppAssets } from "@assets/index";
import { TextFieldWithImage } from "@components/TextField/TextFieldWithImage";


const PassImage = () => <StBaseImage src={AppAssets.Icons.password} width={'20px'} height={'20px'} />

export function PasswordTextField({ formikProps }: any) {
    return (
        <TextFieldWithImage
            name="password"
            label='PASSWORD'
            type="password"
            formikProps={formikProps}
            inputImage={() => <InputAdornment position="start"><PassImage /></InputAdornment>}
            autoFocus={false}
        />
    )
}
