import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { StyledRoot } from "@pages/Home/components/styled";
import { DashboardIrrGraph } from "@pages/Home/pages/Dashboard/component/DashboardIrrGraph";
import { useGet } from "restful-react";
import { normalizeGraphData, numberFormat } from "@utils/appUtils";
import { useRecoilState } from "recoil";
import { dashboardState, Stats } from "@pages/Home/pages/Dashboard/state";
import { CardWithHeader } from "@components/Card/CardWithHeader";

export const DashboardPage = () => {

    const [stats, setStats] = useRecoilState<Stats>(dashboardState)

    useGet({
        path: 'stats',
        queryParams: {
            startDate: '2019-01-01T00:00:00.000Z',
            endDate: '2020-01-01T00:00:00.000Z',
            interval: 4
        },
        resolve: (data) => setStats(data)
    })

    const { currentValue, valueGraph } = stats;

    return (
        <StyledRoot>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <CardWithHeader title='Total Refet Value'>
                        <Typography variant="h5" component="h5">
                            {numberFormat.format(currentValue)}
                        </Typography>
                    </CardWithHeader>
                </Grid>
                <Grid item xs={4}>
                    <CardWithHeader title='Total' />
                </Grid>
                <Grid item xs={4}>
                    <CardWithHeader title='Total' />
                </Grid>

            </Grid>

            <Box mt={3} display='flex' justifyContent='center'>
                <DashboardIrrGraph data={normalizeGraphData(valueGraph)} />
            </Box>
        </StyledRoot>
    );
};
