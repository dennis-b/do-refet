import styled, { css } from "styled-components";
import { Select, TextField, Typography } from "@material-ui/core";
import { AppTheme } from "@assets/style";


export const InputCss = css`
  font-family: Montserrat;
  font-size: ${AppTheme.fontSizes.smallX2};
  color: ${AppTheme.colors.input};
  padding: 10px 14px;
`;

export const StTextFieldContainer: any = styled.div`
  margin-bottom: ${({ margin }: any) => margin};
`

export const StTextFieldErrors = styled(Typography)`
  && {
    position: absolute;
    bottom: 16px;
    left: 4px;
    color: ${AppTheme.colors.red};
    font-size: ${AppTheme.fontSizes.small};
    font-weight: 300;
  }
`

export const StOutlinedInput: any = styled(TextField)`

  && {
    position: relative;
    width: 100%;

    label {
      ${InputCss};
      padding: ${({ padding }: any) => padding};
      transform: ${({ showlabel }: any) => showlabel === 'show' ? 'translate(14px, 2px) scale(1)' : 'translate(-15px,-24px) scale(0.7)'};
      transition: all 250ms;
      color: ${AppTheme.colors.label};
    }

    input {
      ${InputCss};
    }

    fieldset {
      border: ${({ haserror }: any) => `solid 0.7px ${haserror ? AppTheme.colors.red : AppTheme.colors.lightBlue} !important`};
      padding: 0;
    }

    legend {
      display: none;
    }
`;
export const StSelect: any = styled(Select)`

  &:after {
    display: none;
  }

  && {
    position: relative;
    width: 100%;
    color: ${AppTheme.colors.input};
    border: solid 0.7px ${AppTheme.colors.lightBlue};
    ${InputCss};
    padding: 3px 10px;
    border-radius: 4px;

    svg {
      color: ${AppTheme.colors.white};
    }

    input {
      ${InputCss};
      padding: 0;
    }

  }
`;
