import React from 'react';
import { Field, Formik } from 'formik';
import { Box, Button, Grid, LinearProgress } from "@material-ui/core";
import { StyledForm } from "@pages/Home/components/project/styled";
import { DatePicker } from "formik-material-ui-pickers";
import { TextField } from "formik-material-ui";

export interface ProjectValues {
    name: string;
    desc: string;
    startDate: Date;
    endDate: Date;
    irr: string;
    equity: string;
    currency: string;
}

const defValues = {
    name: '',
    desc: '',
    startDate: new Date(),
    endDate: new Date(),
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
            onSubmit={onSubmitInner}
        >
            {({ submitForm, isSubmitting }) => (
                <StyledForm>
                    <Field
                        component={TextField}
                        name="name"
                        type="text"
                        label="name"
                        width={'70%'}
                        fullWidth
                    />
                    <Field
                        component={TextField}
                        name="desc"
                        type="text"
                        label="desc"
                        width={'70%'}
                        fullWidth
                    />
                    <Field
                        component={TextField}
                        name="irr"
                        type="text"
                        label="irr"
                        width={'70%'}
                        fullWidth
                    />
                    <Field
                        component={TextField}
                        name="equity"
                        type="text"
                        label="equity"
                        width={'70%'}
                        fullWidth
                    />
                    <Field
                        component={TextField}
                        name="currency"
                        type="text"
                        label="currency"
                        width={'70%'}
                        fullWidth
                    />
                    <Box mt={2}>
                        <Grid container spacing={4}>
                            <Grid item xs={6}>
                                <Field
                                    component={DatePicker}
                                    name="startDate"
                                    label="Start Date"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={DatePicker}
                                    name="endDate"
                                    label="End Date"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>

                    </Box>
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
                </StyledForm>
            )}
        </Formik>
    );
};

