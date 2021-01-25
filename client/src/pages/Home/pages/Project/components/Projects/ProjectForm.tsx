import React from 'react';
import {Field, Formik} from 'formik';
import {Box, Button, Grid, LinearProgress, MenuItem} from "@material-ui/core";
import {DatePicker} from "formik-material-ui-pickers";
import {TextField} from "formik-material-ui";
import {StyledForm} from '../styled';
import {projectTypes} from "@pages/Home/pages/Project/components/Projects/models";
import {CurrencyAutoCompleteField} from "@components/TextField/CurrencyAutoCompleteField";

export interface ProjectValues {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    irr: string;
    equity: string;
    currency: string;
    projectType: string;
}

const defValues: ProjectValues = {
    name: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    irr: '',
    equity: '',
    currency: '',
    projectType: '',
}

export const ProjectForm = ({onSubmit}: any) => {

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
            {({submitForm, isSubmitting, errors, touched}) => (
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
                        name="description"
                        type="text"
                        label="description"
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
                                    component={TextField}
                                    type="text"
                                    name="projectType"
                                    label="Project Type"
                                    select
                                    variant="standard"
                                    helperText="Please select Type"
                                    margin="normal"
                                    InputLabelProps={{shrink: true}}
                                    fullWidth
                                >
                                    {projectTypes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <CurrencyAutoCompleteField
                                    errors={errors}
                                    touched={touched}
                                    name='currency'
                                    label='select'
                                />
                            </Grid>
                        </Grid>
                    </Box>


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
                    {isSubmitting && <LinearProgress/>}
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

