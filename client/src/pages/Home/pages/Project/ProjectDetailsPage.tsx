import React from 'react';
import { useHistory, useParams } from "react-router";
import { StyledRoot } from "@pages/Home/components/styled";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useGet } from "restful-react";
import {
    projectSelectedState,
    projectSelectedStatsState,
    projectSelectedWithStatsState,
    ProjectWithStatsModel
} from "@pages/Home/pages/Project/state";
import { normalizeGraphData, responseResolver } from "@utils/appUtils";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AccordionDetails, AccordionSummary, Box, Typography } from "@material-ui/core";
import { ValueTimeLineGraph } from "@components/Graph/ValueTimeLineGraph";
import { StatsHeader } from "@pages/Home/pages/Project/components/StatsHeader";
import { ProjectForm } from "@pages/Home/pages/Project/components/ProjectForm";
import { StyledAccordion } from './components/styled';

type Params = {
    id: string
}
export const ProjectDetailsPage = () => {

    const history = useHistory();
    const { id } = useParams<Params>();

    const setProjectSelected = useSetRecoilState(projectSelectedState)
    const setProjectStats = useSetRecoilState(projectSelectedStatsState)
    const {
        valueGraph = [],
        currentValue,
        ...rest
    } = useRecoilValue<ProjectWithStatsModel>(projectSelectedWithStatsState)

    useGet({
        path: 'projects',
        queryParams: { id },
        resolve: (data) => setProjectSelected(responseResolver(data))
    })

    useGet({
        path: 'stats',
        queryParams: { id },
        resolve: (data) => setProjectStats(responseResolver(data))
    })

    return (
        <StyledRoot>
            <StatsHeader currentValue={currentValue} />

            <Box mt={3}>
                <StyledAccordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{rest.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ProjectForm project={rest} display />
                    </AccordionDetails>
                </StyledAccordion>

            </Box>

            <Box mt={3} p={3} display='flex' justifyContent='center' boxShadow={3}>
                <ValueTimeLineGraph
                    data={normalizeGraphData(valueGraph)}
                    legend={`${rest.name} Value Over Time`}
                />
            </Box>
        </StyledRoot>
    );
};
