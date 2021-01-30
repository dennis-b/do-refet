import styled from "styled-components";
import { Form } from "formik";
import { Accordion } from "@material-ui/core";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`


export const StyledForm = styled(Form)`
  width: 70%;
  align-self: center;
`

export const StyledAccordion = styled(Accordion)`
  &.MuiPaper-root {
    background-color: transparent;
  }

  .MuiAccordionDetails-root {
    justify-content: center;
  }
`
