import React from 'react';
import {Grid} from "@material-ui/core";

import {Project} from "./Project";

export const Projects = ({projects}: any) => {
    return (
        <Grid container wrap={'wrap'} spacing={4}>
            {projects.map((project: any) => <Project key={project.id} project={project}/>)}
        </Grid>
    );
};
