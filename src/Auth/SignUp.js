import React, {useContext} from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation'
import {registerUser} from '../api'
import {Authcontext} from '../context/AuthContext.js'

const SignUp = () => {
  const {login} = useContext(Authcontext)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password : ""

    },
    validationSchema,
    onSubmit: async (values, bags) => {
   try{
    let resrponseData = await registerUser(values);
    login(resrponseData);
   }catch(e){
     console.log(e);
      bags.setErrors({ general: 'An error occurred'});
   }
    },
  });

  return (
    <div>

<div className="row pt-5">
  
<div className="col-6 offset-3">
{formik.errors.general && (
                <div class="alert alert-danger" role="alert">
                  {formik.errors.general}
                </div>
              )}
        <main className="form-signin">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
            <input
                type="text"
                name="firstName"
                className={`form-control  ${formik.touched.firstName && formik.errors.firstName && 'is-invalid' }  `}
                onChange={formik.handleChange}
                onBlur= {formik.handleBlur}
                value={formik.values.firstName}
                id='firstName'
              />
                 <label htmlFor="firstName" className="form-label">FirstName</label>
              </div>
              <div className="form-floating">
              
                  <input
                type="text"
                name="lastName"
                className={`form-control my-3  ${formik.touched.lastName && formik.errors.lastName && 'is-invalid' }  `}
                onChange={formik.handleChange}
                onBlur= {formik.handleBlur}
                value={formik.values.lastName}
                id='lastName'
              />
                 <label htmlFor="lastName" className="form-label">LastName</label>
              </div>
              <div className="form-floating">
              <input
                type="email"
                name="email"
                className={`form-control my-3  ${formik.touched.email && formik.errors.email && 'is-invalid' }  `}
                onChange={formik.handleChange}
                onBlur= {formik.handleBlur}
                value={formik.values.email}
                id="email"
              />
              <label htmlFor="email" className="form-label">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className={`form-control my-3  ${formik.touched.password && formik.errors.password && 'is-invalid' }  `}
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
              />
             <label htmlFor="email" className="form-label">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
                   </div>

    </div>
  );
}

export default SignUp;
