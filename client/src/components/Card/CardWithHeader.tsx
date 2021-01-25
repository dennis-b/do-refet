import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
// @ts-ignore
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
// @ts-ignore
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
// @ts-ignore
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { WithChildren } from "../../shared/models";
import { StyledCard, StyledCardHeader } from "@components/Card/styled";

const useStyles = makeStyles(({ spacing }) => ({
    content: {
        paddingTop: 0,
        textAlign: 'left',
        overflowX: 'auto',
        minHeight: '3rem'
    },
}));

type Props = WithChildren<{
    title: string;
    subheader?: string
}>
export const CardWithHeader = function ({ children, subheader, title }: Props) {
    const classes = useStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();
    return (
        <StyledCard className={cardShadowStyles.root}>
            <StyledCardHeader
                className={cardHeaderShadowStyles.root}
                classes={cardHeaderStyles}
                title={title}
                subheader={subheader}
            />
            <CardContent className={classes.content}>
                {children}
            </CardContent>
        </StyledCard>
    );
}
