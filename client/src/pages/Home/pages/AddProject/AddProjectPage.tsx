import React from 'react';
import { StyledRoot } from "@pages/Home/components/styled";
import { ProjectForm, ProjectValues } from "@pages/Home/components/project/ProjectForm";
import { useMutate } from "restful-react";

export const AddProjectPage = () => {

    const { mutate: saveProject, loading } = useMutate({
        verb: "POST",
        path: `/project`
    });


    const onSubmit = async (values: ProjectValues) => {
        try {
            const res = await saveProject(values)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <StyledRoot>
            <ProjectForm onSubmit={onSubmit} />
        </StyledRoot>
    );
};
