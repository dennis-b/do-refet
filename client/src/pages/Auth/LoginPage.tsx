import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router";

import { LoginForm } from "./components/Login/LoginForm";
import { Root, StFullLogoContainer, StFullLogoIcon } from "./components/styled";


export function LoginPage() {

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        // const token = getUserToken();
        // if (token) {
        //     history.push('/')
        // }
        //
        // const query = new URLSearchParams(location.search);
        // const forbidden = query.get('forbidden');
        // if (forbidden) {
        //     notifyError({ message: "Opps you are cannot access this resource!" })
        // }

    }, [])


    const onLogin = async ({ email, password }: { email: string, password: string }) => {
        try {
            // const { data: { login: { uid, token, account } } } = await doLogin({ variables: { email, password } });
            // setUserData({ uid, info: email, account })
            // setUserToken(token)
            // client.writeData({ data: { isLoggedIn: true } });
            history.push('/')

        } catch (e) {
            // notifyError({ message: error.message })

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
