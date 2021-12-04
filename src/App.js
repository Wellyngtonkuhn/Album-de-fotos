import React, {useState, useEffect} from "react"
import './App.css'
import Api from './componentes/api/Api'
import FotosList from "./componentes/FotosList"
import Rodape from './componentes/Rodape'




export default function App(){

  const [fotoList, setFotoList] = useState([])
  
  
  useEffect(()=>{
    const loadAll = async () =>{
      let list = await Api.getHomeList()
      setFotoList(list)
    }
    loadAll()
  },[])


  return(
    <section className='page'>
        <div className='lists'>
          {fotoList.map((item, key)=>{
            return(
              <div>
                <FotosList key={key} title={item.title} items={item.items}/>
              </div>
            )
          })}
        </div>

        <Rodape/>

      


    </section>
  )
}