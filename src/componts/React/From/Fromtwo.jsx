import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import "./Formtwo.css";

const Fromtwo = () => {
  const data = {
    username: "",
    email: "",
    password: '',
  }
  const [formdata, setFormdata] = useState(data);
  const [focused,setFocuse] =useState(false); 

  const inputdata = [

    {
      id: 1,
      placeholder: "username",
      name: "username",
      type: "text",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      value : formdata.username,
      required: "ture",
      errormess: "Username should be 3-8 character shouldn't use any special character",
      
    },
    {
      id: 2,
      placeholder: "Email",
      name: "email",
      type: "email",
      label: "Email",
      value : formdata.email,
      required: "ture",
      errormess: 'It should be a valid email address!'
    },
    {
      id: 3,
      placeholder: "Password",
      name: "password",
      type: "password",
      value : formdata.password,
      label: "Password",
      pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$',
      required: "ture",
      errormess: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
    }
  ]

  const changehandle = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formdata, [name]: value })
  }

  function submithanderl(){
    console.log(formdata)
  }
  
  return (
    <div>
      <Navbar />
      <div className='d-flex justify-center '>
        <div className="container ">
          <h4 className='text-center'>Form using HTML and css</h4>
          <div  >
            {
              inputdata.map((i) => (
                <div>
                  <label > {i.label}</label>
                  <input key={i.id}
                    placeholder={i.placeholder}
                    type={i.type}
                    pattern={i.pattern}
                    name={i.name}
                    value={i.value}
                    required={i.required}
                    className='form-control'
                    onChange={changehandle}
                    onBlur={()=>setFocuse(true)}
                    
                    
                  />
                  <span>{i.errormess}</span>
                </div>
              ))
            }
            <button className='btn btn-success mt-3' onClick={submithanderl}>submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fromtwo