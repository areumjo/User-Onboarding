import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ errors, touched }) => {
    return (
        <div className="user-form">
            <h1>Join us today</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                <Field type="text" name="email" placeholder="Email" />
                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                <Field type="text" name="password" placeholder="Password" />
                {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                <label>
                    <Field type="checkbox" name="service" />
                    Subscribe our newsletter
                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues(values) {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            service: values.service || false,
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required!'),
        email: Yup.string().email('Email not valid').required('Email is required!'),
        password: Yup.string().min(8, 'Password must be 8 characters of longer').required('Password is required!'),
        }),
    handleSubmit(values) {
        console.log("handleSubmit clicked");
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => console.log(res))
            .catch(err => console.log(err.response));
    }
})(UserForm);

export default FormikUserForm;
