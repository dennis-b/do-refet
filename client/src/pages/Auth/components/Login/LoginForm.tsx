import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import { loginSchema } from "./validationSchema";
import { EmailTextField } from "./EmailTextField";
import { StFormContainer, StyledFreedomIcon, StyledLogoText } from '../styled';
import { PasswordTextField } from "./PasswordTextField";
import { Box, Button, Grid } from "@material-ui/core";


export function LoginForm({ onLogin }: { onLogin: (values: any) => Promise<any> }) {
    return (
        <StFormContainer>
            <Grid container spacing={4}>
                <Grid item md={6} xs={6}>
                    <StyledFreedomIcon />
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box display="flex" height="100%" flexDirection="column">
                        <Box>
                            <StyledLogoText>DoRefet</StyledLogoText>
                        </Box>
                        <Formik
                            initialValues={{ email: '', password: '', }}
                            validationSchema={loginSchema}
                            onSubmit={onLogin}
                            render={(formikProps: FormikProps<any>) => (
                                <Form>

                                    <FormControl margin="none" required fullWidth>
                                        <EmailTextField formikProps={formikProps} autoFocus={true} />
                                    </FormControl>

                                    <FormControl margin="none" required fullWidth>
                                        <PasswordTextField formikProps={formikProps} />
                                    </FormControl>


                                    <Button type="submit" color={"primary"}>
                                        LOG IN
                                    </Button>

                                </Form>
                            )}
                        />
                    </Box>

                </Grid>
            </Grid>
        </StFormContainer>
    )
}

