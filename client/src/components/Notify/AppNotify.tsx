import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { Message, Notify } from "./styled";

export const MessageType = {
    Error: 'error',
    Info: 'info',
};

export class AppNotify extends Component {
    state = {
        open: false,
        type: null,
        message: ''
    };

    error = ({ message }) => this.open({ message, type: MessageType.Error });
    info = ({ message }) => this.open({ message, type: MessageType.Info });

    close = () => this.setState({ open: false, message: '', type: null });
    open = ({ message, type }) => this.setState({ open: true, type, message });

    render() {
        const { open, type, message } = this.state;

        return (
          <Notify
            type={type}
            open={open}
            autoHideDuration={5000}
            onClose={this.close}
            ContentProps={{ 'aria-describedby': 'message-id' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            message={<Message>{message}</Message>}
            action={
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={this.close}
                >
                    <CloseIcon />
                </IconButton>
            }
          />
        );
    }
}


