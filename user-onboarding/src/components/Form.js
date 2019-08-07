import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import User from './User.js';

const UserForm = ({ errors, touched, status }) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status]);
        }
    }, [status])

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
                    <Field type="checkbox" name="term" />
                    Accept Terms of Service
                </label>
                <button type="submit">Submit</button>
            </Form>
            <User user={user}/>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues(values) {
        return {
            name: values.name || '',
            email: values.email || '',
            password: values.password || '',
            term: values.term || false,
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required!'),
        email: Yup.string().email('Email not valid').required('Email is required!'),
        password: Yup.string().min(8, 'Password must be 8 characters of longer').required('Password is required!'),
        term: Yup.bool().oneOf([true], 'Term must be checked')    
    }),

    handleSubmit(values, { setStatus }) {
        console.log("handleSubmit clicked");
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                console.log(res)
                setStatus(res.data.name)
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);

export default FormikUserForm;
