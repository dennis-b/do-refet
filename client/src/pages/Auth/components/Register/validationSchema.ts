import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
    name: Yup.string()
        .required('First Name is required'),
    username: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string()
        .min(3, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
})
