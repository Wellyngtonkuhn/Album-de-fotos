import {useState, useEffect} from 'react'
import Api from './api/Api'
import Destaque from './Destaque'
import FotosList from './FotosList'


export default function Home(){


    const [fotoList, setFotoList] = useState([])
    const [destaque, setDestaque] = useState(null)


    useEffect(()=>{
        const loadAll = async () =>{
          let list = await Api.getHomeList()
          setFotoList(list)
    
          let wedding = list.filter(i=>i.slug === 'wedding')
          let randomFoto = Math.floor(Math.random() * (wedding[0].items.photos.length - 1))
          let fotoDestaque = wedding[0].items.photos[randomFoto]
          setDestaque(fotoDestaque)
        }
        loadAll()
      },[])

    return(
        <section id='home'>
            {destaque &&
                <Destaque item={destaque}/>
            }
            <div className='lists'>
            {fotoList.map((item, key)=>{
                return(
                    <section id='fotosList'>                        
                        <FotosList  key={key} title={item.title} items={item.items} slug={item.slug}/>
                    </section>
                    )
            })}
            </div>
        </section>
    )
}