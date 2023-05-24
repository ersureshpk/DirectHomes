'use client';
import Image from 'next/image';
import logoImage from '../Image/logo.png';
import { Formik } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import '../styles/reg.css';


// function checkValidity(values){
//   if( Number(values)?.toString() == NaN?.toString() && values?.includes('@')  ) {
//     if( values?.includes('.')){
//       return ['email', true]
//     }else{
//       return ['email', false]
//     }
//   }else if(Number(values).toString() != NaN.toString()){
//     if(values?.length ==10){
//      return ['phoneNumber' , true]
//     }else{
//      return ['phoneNumber' , false]
//     }
//   }
//   else{
//      if(values?.length <3 || !values){
//        return ['username', false]
//      }else{
//          return ['username', true]
//      }
//   }
// }

// Creating schema
const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required name'),
  phoneNumber: Yup.string()
    .min(9, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required phone number'),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required username'),
  password: Yup.string()
    .required("required password")
    .min(8, "Password must be at least 8 characters"),
});

const handleRegister = async(values) => {
  // const userField = checkValidity(values.userIdentityField)
  // values[userField[0]] = values.userIdentityField
  
  const requestOptions ={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values)
  }
 const res = await fetch('http://localhost:8080/register', requestOptions)
}

function Register() {
  return (
    <>

      <Formik
        validationSchema={schema}
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: "",
          userName: "",
          password: ""
        }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          handleRegister(values);
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
          <div className="register">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <Image src={logoImage} alt="Logo" width={160} height={85} />
                <span>Register</span>
                <input name="fullName"
                  placeholder="Enter Full Name"
                  className="form-control"
                  onChange={handleChange}
                  value={values.fullName} 
                />
                <p className="error">
                  {errors.fullName && touched.fullName && errors.fullName}
                </p>
               
                <input name="phoneNumber"   
                placeholder="Enter your Phone Number"
                  className="form-control"
                  onChange={handleChange}
                  value={values.phoneNumber} />
                <p className="error">
                  {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                </p>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id"
                  className="form-control inp_text"
                  id="email"
                />

                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                <input
                  type="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  placeholder="Enter userName"
                  className="form-control"
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

                <button type="submit">register</button>
                <p className="register-register-text">
                  Already have an account ? <Link href="/login">Login</Link> instead
                </p>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Register;






