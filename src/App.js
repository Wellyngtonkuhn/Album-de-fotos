import React, {useState, useEffect} from "react"
import Api from './componentes/api/Api'
import FotosList from "./componentes/FotosList"




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
    <div className='page'>
        <section className='lists'>
          {fotoList.map((item, key)=>{
            return(
              <div>
                <FotosList key={key} title={item.title} items={item.items}/>


              </div>
            )
          })}


        </section>
      


    </div>
  )
}