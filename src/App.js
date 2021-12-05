import React,{useState, useEffect} from "react"
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from "./componentes/Header"
import Rotas from './componentes/rotas/Rotas'
import Rodape from './componentes/Rodape'




export default function App(){

 
 
  const [blackHeader, setBlackheader] = useState(false )
  
  
  


  useEffect(()=>{
      const scroll = () =>{
        if(window.scrollY > 50){
          setBlackheader(true)
        }else{
          setBlackheader(false)
        }
      }
      window.addEventListener('scroll', scroll)

      return ()=>{
        window.removeEventListener('scroll', scroll)
      }
  },[])


  return(
    <BrowserRouter>
      <section className='page'>
     
        <Header black={blackHeader}/>
        <Rotas/>
        



      
        <Rodape/>
      </section>
    </BrowserRouter>
  )
}