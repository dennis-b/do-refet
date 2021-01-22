import React from 'react';
import { Field, Form, Formik } from 'formik';

import { Box, Button, LinearProgress } from "@material-ui/core";
import { StyledTextField } from "@pages/Home/components/project/styled";


export interface ProjectValues {
    name: string;
    desc: string;
    startDate: string;
    endDate: string;
    irr: string;
    equity: string;
    currency: string;
}

const defValues = {
    name: '',
    desc: '',
    startDate: '',
    endDate: '',
    irr: '',
    equity: '',
    currency: '',
}

export const ProjectForm = ({ onSubmit }: any) => {

    const onSubmitInner = (values: any, formikBug: any) => {
        setTimeout(() => {
            formikBug.setSubmitting(false);
            console.log(JSON.stringify(values, null, 2));
            onSubmit && onSubmit(values)
        }, 500);
    }

    return (
        <Formik
            initialValues={defValues}
            validate={(values: ProjectValues) => {
                const errors: Partial<ProjectValues> = {};
                if (!values.name) {
                    errors.name = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.name)
                ) {
                    errors.name = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={onSubmitInner}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <Field
                        component={StyledTextField}
                        name="name"
                        type="text"
                        label="name"
                        width={'70%'}
                    />
                    <Field
                        component={StyledTextField}
                        name="desc"
                        type="text"
                        label="desc"
                        width={'70%'}
                    />
                    <Field
                        component={StyledTextField}
                        name="irr"
                        type="text"
                        label="irr"
                        width={'70%'}
                    />
                    <Field
                        component={StyledTextField}
                        name="equity"
                        type="text"
                        label="equity"
                        width={'70%'}
                    />
                    <Field
                        component={StyledTextField}
                        name="currency"
                        type="text"
                        label="currency"
                        width={'70%'}
                    />
                    {isSubmitting && <LinearProgress />}
                    <Box mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Submit
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

