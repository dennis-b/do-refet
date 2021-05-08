import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router";

import { LoginForm } from "./components/Login/LoginForm";
import { Root, StFullLogoContainer, StFullLogoIcon } from "./components/styled";
import { useMutate } from "restful-react";
import { notifyError } from "@components/Notify";
import { responseResolver } from "@utils/appUtils";
import { getUserToken } from "@utils/authUtils";


export function LoginPage() {

    const location = useLocation();
    const history = useHistory();
    const { mutate: login } = useMutate({
        verb: "POST",
        path: `/login`,
        resolve: (data) => {
            const { accessToken } = responseResolver(data);
            localStorage.setItem('token', accessToken)
        }
    });

    useEffect(() => {
        const token = getUserToken();
        if (token) {
            history.push('/')
        }

        const query = new URLSearchParams(location.search);
        const forbidden = query.get('forbidden');
        if (forbidden) {
            notifyError({ message: "Opps you are cannot access this resource!" })
        }

    }, [history, location.search])


    const onLogin = async ({ email, password }: { email: string, password: string }) => {
        try {
            await login({ email, password });
            history.push('/')
        } catch (error) {
            console.log(error)
            notifyError({ message: error.data.msg })
        }
    };

    return (
        <Root>
            <StFullLogoContainer>
                <StFullLogoIcon />
            </StFullLogoContainer>

            <LoginForm onLogin={onLogin} />
        </Root>
    )
}
