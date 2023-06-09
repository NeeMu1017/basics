import {  useFormik } from 'formik'
import React from 'react'
import "./Formtwo.css"
import Navbar from "../Navbar/Navbar"
const Formthree = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    },
    validate: status => {
      // make object to take a function and return that error

      const errors = {}
      if (!status.name) {
        errors.name = "Name required"
      }
      if (!status.email) {
        errors.email = "Email required"
      } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(status.email)) {
        errors.email = "Invalid Email "
      }
      if (!status.password) {
        errors.password = "Password reuired"
      } else if (!/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,100})$/.test(status.password)) {
        errors.password = "Password must be 8 letter exp:: Xyz1234@"
      }
      return errors
    }
  })

  // console.log(formik.values);
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <form className='p-5 ' onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name" className='fw-bold fs-3'>Name</label>
            <input type="text"
              className='form-control'
              name='name'
              
              onBlur={formik.handleBlur}
              onInput={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (<div className='errormas'>{formik.errors.name}</div>) : null}
          </div>
          <label htmlFor="email"
            className='fw-bold fs-3'
          >Email</label>
          <input type="text" className='form-control'
            name='email'
            id='email'
            onInput={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className='errormas'>{formik.errors.email}</div> : null}
          <label htmlFor="password" className='fw-bold fs-3'>Password</label>
          <input type="text" className='form-control'
            name='password'
            id='password'
            onInput={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div className='errormas'> {formik.errors.password}</div> : null}

          <button className='btn btn-success mt-3' type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Formthree