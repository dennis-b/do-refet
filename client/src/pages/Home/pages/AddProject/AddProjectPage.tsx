import React from 'react';
import { StyledRoot } from "@pages/Home/components/styled";
import { ProjectForm, ProjectValues } from "@pages/Home/components/project/ProjectForm";

export const AddProjectPage = () => {

    const onSubmit = ({ name, desc }: ProjectValues) => {

    }

    return (
        <StyledRoot>
            <ProjectForm onSubmit={onSubmit} />
        </StyledRoot>
    );
};
