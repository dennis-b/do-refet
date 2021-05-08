import React from 'react';
import { useMutate } from "restful-react";
import { useHistory } from "react-router";

import { StyledRoot } from "@pages/Home/components/styled";
import { ProjectForm, ProjectValues } from "./components/ProjectForm";

export const ProjectAddPage = () => {

    const history = useHistory();

    const { mutate: saveProject } = useMutate({
        verb: "POST",
        path: `/projects`
    });


    const onSubmit = async (values: ProjectValues) => {
        try {
            await saveProject(values)
            history.push('/home/projects')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <StyledRoot>
            <ProjectForm onSubmit={onSubmit} />
        </StyledRoot>
    );
};
