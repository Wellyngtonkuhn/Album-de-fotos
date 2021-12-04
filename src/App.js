import React, {useState, useEffect} from "react"
import './App.css'
import Api from './componentes/api/Api'
import Header from "./componentes/Header"
import Destaque from "./componentes/Destaque"
import FotosList from "./componentes/FotosList"
import Rodape from './componentes/Rodape'




export default function App(){

  const [fotoList, setFotoList] = useState([])
  const [destaque, setDestaque] = useState(null)
  const [blackHeader, setBlackheader] = useState(false )
  
  
  useEffect(()=>{
    const loadAll = async () =>{
      let list = await Api.getHomeList()
      setFotoList(list)

      let natureza = list.filter(i=>i.slug === 'nature-photograph')
      let randomFoto = Math.floor(Math.random() * (natureza[0].items.photos.length - 1))
      let fotoDestaque = natureza[0].items.photos[randomFoto]
      setDestaque(fotoDestaque)
    }
    loadAll()
  },[])


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
      {destaque &&
        <Destaque item={destaque}/>
      }
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