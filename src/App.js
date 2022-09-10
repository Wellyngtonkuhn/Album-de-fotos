import {useState, useEffect} from "react"

import './App.css'
import NavBar from "./componentes/navBar/NavBar"
import Home from './pages/Home'
import Footer from './componentes/footer/Footer'



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
        <NavBar black={blackHeader}/>
          <Home/>
        <Footer/>   
      </section>
  )
}