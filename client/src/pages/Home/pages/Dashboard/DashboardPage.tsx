import React, {useEffect} from 'react';
import {getProjects} from "@pages/Home/pages/Dashboard/components/Projects/mocks";
import {useRecoilState} from "recoil";
import {projectsState} from "./state";
import {StyledRoot} from './components/styled';
import {Projects} from "@pages/Home/pages/Dashboard/components/Projects/Projects";

export const DashboardPage = () => {


    const [projects, setProjects] = useRecoilState(projectsState)

    const getMockData = async () => {
        const data: any = await getProjects()
        setProjects(data)
    }
    useEffect(() => {
        getMockData()
    }, [])


    console.log(projects)

    return (
        <StyledRoot>
            <div> DashboardPage</div>
            <Projects projects={projects}/>
        </StyledRoot>
    );
};
