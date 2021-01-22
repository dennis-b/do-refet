import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { StyledRoot } from "@pages/Home/components/styled";

export const DashboardPage = () => {
    return (
        <StyledRoot>
            <Box
                display="flex"
                flex={0.1}
                width="100%"
                minHeight={'10%'}
                alignItems='center'
                mb={1}
            >
                <Box>
                    <Typography>total:</Typography>
                </Box>
            </Box>
        </StyledRoot>
    );
};
