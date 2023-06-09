import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
const Todo = () => {
  const [todo, setTodo] = useState([])
  const [list, setList] = useState('')

  const handelSubmit = (e) => {

    setTodo([...todo, { text: list, iscoplited: false }])
    setList('')

  }

  const handelDelete= (index)=>{
    // Create new varable to add our old list 
    const newTodo = [...todo];
    // Delete that index item
    newTodo.splice(index,1);
    // update new list of list
    setTodo(newTodo)


  }

  const handelchange = (e) => {
    setList(e.target.value)

  }
  return (
    <div>
      <Navbar />
      <div className='container ' onSubmit={handelSubmit}>
        <div className='container p-3 d-flex  '>
          <input type="text"
            placeholder='Add your list'
            className='form-control m-2'
            value={list}
            onInput={handelchange}
          />
          <button className='btn btn-primary m-2'type='submit' onClick={handelSubmit}>+</button>
        </div>
        <div className='container px-5'>
        <table className='table table-borderless '>
          <tbody>
            {
              todo.map((item, index) => (
                <tr key={index}>
                  <td><input type="checkbox" className='form-check-input' /></td>
                  <td className='px-5'>{item.text}</td>
                  <td><button className='btn btn-danger ms-3' onClick={(index)=> handelDelete(index)}>Delete</button></td>
                </tr>
              ))

            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Todo