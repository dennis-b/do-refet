import React from 'react';
import { Form, Formik } from 'formik';

import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar/index.js';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styles } from '../styles';


export function RegisterFormView({ classes, onRegister, accounts, onAccountChange, parks }: any) {

    // const accountOptions = accounts.map(account => ({ value: account.id, label: account.name }));
    // const parksOptions = parks.map(park => ({ value: park.parkId, label: park.name }));

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>

                <Formik
                    initialValues={
                        {
                            email: '',
                            password: '',
                            confirmPassword: '',
                            name: '',
                            username: '',
                            account: '',
                            parks: []
                        }
                    }
                    onSubmit={onRegister}
                    render={({ handleChange, values }) => (
                        <Form>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.name}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">username</InputLabel>
                                <Input
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.username}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={values.password}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="confirmPassword">confirmPassword</InputLabel>
                                <Input
                                    name="confirmPassword"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                />
                            </FormControl>


                            {/*<Select*/}
                            {/*    name='account'*/}
                            {/*    label='Select Account'*/}
                            {/*    placeholder='Select an Option'*/}
                            {/*    required*/}
                            {/*    onSelect={(v) => console.log(v)}*/}
                            {/*    onChange={(e) => {*/}
                            {/*        handleChange(e);*/}
                            {/*        onAccountChange({ accountId: e.target.value })*/}
                            {/*    }}*/}
                            {/*    options={accountOptions}*/}
                            {/*/>*/}

                            {/*<Select*/}
                            {/*    name='parks'*/}
                            {/*    label='Select Parks'*/}
                            {/*    required*/}
                            {/*    multiple*/}
                            {/*    options={parksOptions}*/}
                            {/*/>*/}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Register
                            </Button>
                        </Form>
                    )}
                />
            </Paper>
        </main>
    )
}

export const RegisterForm: any = withStyles(styles)(RegisterFormView);
