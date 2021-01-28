import React from 'react';
import { useMutate } from "restful-react";
import { useHistory } from "react-router";

import { StyledRoot } from "@pages/Home/components/styled";
import { ProjectForm, ProjectValues } from "./components/ProjectForm";

export const AddProjectPage = () => {

    const history = useHistory();

    const { mutate: saveProject, loading } = useMutate({
        verb: "POST",
        path: `/project`
    });


    const onSubmit = async (values: ProjectValues) => {
        try {
            const res = await saveProject(values)
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
