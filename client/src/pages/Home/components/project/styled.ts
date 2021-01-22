import { TextField } from "formik-material-ui";
import styled from "styled-components";


export const StyledTextField = styled(TextField)<{ width: string }>`
  width: ${({ width }) => width || 'inherit'};
  display: block;
`
