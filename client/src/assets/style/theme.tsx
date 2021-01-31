import React from "react";
import { ThemeProvider } from "styled-components";

export const AppTheme = {
    colors: {
        // lightBlue: '#4479E3',
        blue: '#0170F2',
        bgBlue: '#0D1739',
        borderBlue: '#16255A',
        darkBlue: '#051A45',
        darkestBlue: '#18152A',
        darkestBlue2: '#000022',
        gray: '#9C9C9C',
        gray2: '#838382',
        orange: '#FF7600',

        lightGreen: '#05c425',
        lightBlue: '#53a8e2',
        white: '#ffffff',
        container: '#171E22',
        blueDark: '#1c1c1c',
        blueDarkX2: '#0d0d0e',
        border: '#3a4364',
        grayDark: '#464646',
        input: 'rgba(255, 255, 255, 0.9)',
        label: 'rgba(255, 255, 255, 0.7)',
        red: '#fc0c39',


    },
    fonts: [
        'Dosis',
        "sans-serif",
        "Roboto"
    ],

    fontSizes: {
        extraSmall: "11px",
        small: "15px",
        smallX2: "16px",
        smallX3: "18px",
        medium: "20px",
        mediumX2: "22px",
        large: "25px"
    }


};

export const Theme = ({ children }: any) => <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
