import * as Yup from 'yup';

const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegx = /^(\+98|0)?9\d{9}$/;

export const useSignUpValidation = () => {
    return {
        signUpValidation: Yup.object({
            userName: Yup.string().required('Please enter user name.'),
            email: Yup.string().required('Please enter email').matches(emailRegx, 'Email must be a valid email'),
            password: Yup.string().required("Please enter password"),
            confirmPassword: Yup.string().required("Please enter confirm password").oneOf([Yup.ref('password')], 'password dose not match.'),
            phoneNumber: Yup.string().required("Please enter mobile number").matches(phoneRegx, 'Please enter phone in correct format'),
            avatar: Yup.string().nullable()
        })
    }
}