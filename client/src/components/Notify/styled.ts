import styled from "styled-components";
import { Snackbar } from "@material-ui/core";
import { MessageType } from "./AppNotify";

export const Notify: any = styled(Snackbar)`
  &&{
    position: absolute;
    .MuiSnackbarContent-root{
      background-color: ${({ type }: { type: any }) => type === MessageType.Info ? 'rgba(30,188,255,0.39)' : 'rgba(137,3,32,0.61)'};
    }
  }
`;
export const Message = styled.span`
`;
