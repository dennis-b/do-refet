import React from 'react';
import { Field, Formik } from 'formik';
import { Box, Button, Grid, LinearProgress, MenuItem } from "@material-ui/core";
import { DatePicker } from "formik-material-ui-pickers";
import { TextField } from "formik-material-ui";
import { CurrencyAutoCompleteField } from "@components/TextField/CurrencyAutoCompleteField";
import { ProjectType } from "@shared/models";
import { StyledForm } from './styled';
import { datePickerLabel } from "@utils/appUtils";
import { ProjectModel } from "@pages/Home/pages/Project/state";

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

const projectTypes = Object.values(ProjectType);

interface Props {
    onSubmit?: (values: any) => void;
    project?: ProjectModel
    display?: boolean
}

export const ProjectForm = ({ onSubmit, project, display }: Props) => {

    const onSubmitInner = (values: any, formikBug: any) => {
        setTimeout(() => {
            formikBug.setSubmitting(false);
            console.log(JSON.stringify(values, null, 2));
            onSubmit && onSubmit(values)
        }, 500);
    }

    const initialValues = project && Object.keys(project).length > 0 ? project : defValues;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitInner}
            enableReinitialize
        >
            {({ submitForm, isSubmitting, errors, touched }) => (
                <StyledForm>
                    {!display &&
                    <Field
                      component={TextField}
                      name="name"
                      type="text"
                      label="name"
                      fullWidth
                      disabled={display}
                    />
                    }
                    <Field
                        component={TextField}
                        name="description"
                        type="text"
                        label="description"
                        fullWidth
                        disabled={display}
                    />
                    <Field
                        component={TextField}
                        name="irr"
                        type="text"
                        label="irr"
                        width={'70%'}
                        fullWidth
                        disabled={display}
                    />
                    <Field
                        component={TextField}
                        name="equity"
                        type="text"
                        label="equity"
                        fullWidth
                        disabled={display}
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
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    disabled={display}
                                >
                                    {projectTypes.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
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
                                    labelFunc={datePickerLabel}
                                    fullWidth
                                    disabled={display}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    component={DatePicker}
                                    name="endDate"
                                    label="End Date"
                                    labelFunc={datePickerLabel}
                                    fullWidth
                                    disabled={display}
                                />
                            </Grid>
                        </Grid>

                    </Box>
                    {isSubmitting && <LinearProgress />}
                    <Box mt={2}>
                        {onSubmit &&
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={submitForm}
                        >
                            Submit
                        </Button>
                        }
                    </Box>
                </StyledForm>
            )}
        </Formik>
    );
};

