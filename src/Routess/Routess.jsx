import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../componts/React/Home/Home'
const Routess = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routess