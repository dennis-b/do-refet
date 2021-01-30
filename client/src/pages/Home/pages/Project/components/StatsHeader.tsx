import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { CardWithHeader } from "@components/Card/CardWithHeader";
import { numberFormat } from "@utils/appUtils";

export const StatsHeader = ({ currentValue }: { currentValue: number }) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <CardWithHeader title='Project  Value'>
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
    );
};
