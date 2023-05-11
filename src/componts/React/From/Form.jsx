import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import styles from "./Form.module.css"
const Form = () => {
  // varaible
  const data = {
    username: "",
    email: "",
    password: ""
  }

  // Hook || Function
  const [formvalue, Setformvalue] = useState(data);
  const [formerror, setFormerror] = useState({})
  
  const [issubmit, setIssubmit] = useState(false);


  

  const changeEven = (e) => {
    // const { name, value } = e.target;
   
   if (!validation([e.target.name])){
    setFormerror("plass enter");
   }else{
       Setformvalue({ ...formvalue, [e.target.name]: e.target.value })
   }

   
  }

  const submitevent = () => {

    setFormerror(validation(formvalue))
    // setIssubmit(true)
  }
  useEffect(() => {
    if (issubmit) {
      console.log(formerror)
    }
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue)
    }
  }, [formerror, formvalue, issubmit])


  const validation = (valuse) => {
    const error = {};

    if (!valuse.username) {
      error.username = "Username is requirer"
    }
    if (!valuse.email) {
      error.email = "Email is requirer"
    }
    if (!valuse.password) {
      error.password = "Password is requirer"
    }
    return error
  }


  return (
    <div className={styles.login_page} >
      <Navbar />
      <div className="container">
        <div className={styles.form_mange}>
          <div className={styles.Form} >
            <h2 className={styles.form_logo}>LOGIN</h2>
            <div className={styles.From_input}>
              <label > Name</label>
              <input type="text"
                className='form-control'
                placeholder='Name'
                value={formvalue.username}
                name='username'
                onChange={changeEven}
              // onChange={(e)=> {Setformvalue({...formvalue,username:e.target.value})}}

              />
              <p className='text-danger'>{formerror.username}</p>
            </div>
            <div className={styles.From_input}>
              <label>Email</label>
              <input type="email"
                className='form-control'
                value={formvalue.email}
                name='email'
                onChange={changeEven}
                placeholder='Email' />
              <p className='text-danger'>{formerror.email}</p>
            </div>
            <div className={styles.From_input}>
              <label > Password</label>
              <input type="password"
                className='form-control'
                placeholder='Password'
                name='password'
                value={formvalue.password}
                onChange={changeEven}
              />
              <p className='text-danger'>{formerror.password}</p>
            </div>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-success' onClick={submitevent}>Submit</button>
            </div>
          </div >
        </div>
      </div>
    </div>
  )
}

export default Form;