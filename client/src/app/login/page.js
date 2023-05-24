'use client';
import Image from 'next/image';
import logoImage from '../Image/logo.png';
import { Formik } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import '../styles/login.css';


// Creating schema
const schema = Yup.object().shape({
    userName: Yup.string()
        .required("userName is a required field")
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters"),
});

function Login() {
    return (
        <>
          
            <Formik
                validationSchema={schema}
                initialValues={{ userName: "", password: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="login">
                        <div className="form">
                            {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                            <form noValidate onSubmit={handleSubmit}>
                            <Image src={logoImage} alt="Logo" width={160} height={85} />
                                <span>Login</span>
                                
                                <input
                                    type="userName"
                                    name="userName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName}
                                    placeholder="Enter username"
                                    className="form-control inp_text"
                                    id="userName"
                                />
                               
                                <p className="error">
                                    {errors.userName && touched.userName && errors.userName}
                                </p>
                               
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                               
                                <p className="error">
                                    {errors.password && touched.password && errors.password}
                                </p>
                                
                                <button type="submit">Login</button>
                                <p className="Login-register-text mt-1">
                                    Don't have an account yet? <Link href="/register">Register</Link> instead
                                </p>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    );
}

export default Login;



