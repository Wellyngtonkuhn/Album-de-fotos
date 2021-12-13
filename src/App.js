import {useState, useEffect} from "react"

import './App.css'
import Header from "./componentes/Header"
import Home from './componentes/Home'
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
      <section className='page'>
        <Header black={blackHeader}/>
        <Home/>
        <Rodape/>   
      </section>
  )
}