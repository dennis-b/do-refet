import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required'),
})
