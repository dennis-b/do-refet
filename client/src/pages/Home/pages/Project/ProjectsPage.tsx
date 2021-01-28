import React from 'react';
import { useRecoilState } from "recoil";
import { Box, Fab, Typography } from '@material-ui/core';
import { useHistory } from "react-router";
import AddIcon from '@material-ui/icons/Add';
import { useGet } from "restful-react";

import { StyledRoot } from "@pages/Home/components/styled";
import { responseResolver } from "@utils/appUtils";

import { projectsState } from "./state";
import { Projects } from "./components/Projects";

export const ProjectsPage = () => {

    const history = useHistory();

    const [projects, setProjects] = useRecoilState(projectsState)
    useGet({
        path: 'project',
        resolve: (data) => setProjects(responseResolver(data))
    })

    const onAddProject = () => history.push('/home/project/add');

    console.log(projects)

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
            {projects && <Projects projects={projects} />}
        </StyledRoot>
    );
};
