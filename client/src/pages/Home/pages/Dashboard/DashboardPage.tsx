import React, { useEffect } from 'react';
import { getProjects } from "@pages/Home/pages/Dashboard/components/Projects/mocks";
import { useRecoilState } from "recoil";
import { Box, Fab, Typography } from '@material-ui/core';
import { useHistory } from "react-router";
import AddIcon from '@material-ui/icons/Add';

import { Projects } from "@pages/Home/pages/Dashboard/components/Projects/Projects";
import { StyledRoot } from "@pages/Home/components/styled";

import { projectsState } from "./state";

export const DashboardPage = () => {

    const history = useHistory();

    const [projects, setProjects] = useRecoilState(projectsState)
    const getMockData = async () => {
        const data: any = await getProjects()
        setProjects(data)
    }

    useEffect(() => {
        getMockData()
    }, [])

    const onAddProject = () => {
        console.log('ddd')
        history.push('/home/project/add')
    }

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
                <Box mr={1} position='fixed' bottom='1rem' right='15px'>
                    <Fab color="primary" aria-label="add" onClick={onAddProject}>
                        <AddIcon />
                    </Fab>
                </Box>
            </Box>
            <Projects projects={projects} />
        </StyledRoot>
    );
};
