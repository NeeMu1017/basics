import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../componts/React/Home/Home'
import Form from '../componts/React/From/Form'
import Formthree from '../componts/React/From/Formthree'
import Fromtwo from '../componts/React/From/Fromtwo'
import Tableget from '../componts/React/table/tableget/Tableget'


const Routess = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    
                    <Route path='/' element={<Home/>}>
                    
                    </Route>
                    <Route path='from' element={<Form/>}></Route>
                    <Route path='from2' element={<Fromtwo/>}></Route>
                    <Route path="form3" element={<Formthree/>}></Route>
                    
                    <Route path='tableget' element={<Tableget/>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routess