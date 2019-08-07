import React from 'react';
import { Form, Field, withFormik } from 'formik';

const UserForm = ({}) => {
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                <Field type="text" name="email" placeholder="Email" />
                <Field type="text" name="password" placeholder="Password" />
                <label>
                    <Field type="checkbox" name="service" />
                    Join our service
                </label>
                <button>Submit</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({

})(UserForm);

export default FormikUserForm;
