import './Galeria.css'
import {useState, useEffect } from 'react'
import Api from './api/Api'





export default function Galeria(){

    const urlParams = new URLSearchParams(window.location.search)

    const slug = urlParams.get('slug')
    console.log(slug)
    
    const [fotos, setFotos] = useState([])

    useEffect(()=>{
        const loadAll = async () =>{
        const list = await Api.getHomeList()
        setFotos(list)
        }
        loadAll()
    },[])




    return(
        <main>

            <h1>Olá eu sou o slug: {slug} </h1>

            
              
          
            
                            
        </main>
    )
}