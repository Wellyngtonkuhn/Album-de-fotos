import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "../Home"
import Galeria from "../Galeria"


export default function Rotas(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/galeria' element={<Galeria/>}/>
        </Routes>
    )
}