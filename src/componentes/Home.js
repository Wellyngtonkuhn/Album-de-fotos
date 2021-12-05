import React, {useState, useEffect} from 'react'
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
    
          let natureza = list.filter(i=>i.slug === 'nature-photograph')
          let randomFoto = Math.floor(Math.random() * (natureza[0].items.photos.length - 1))
          let fotoDestaque = natureza[0].items.photos[randomFoto]
          setDestaque(fotoDestaque)
        }
        loadAll()
      },[])

    return(
        <section>

            {destaque &&
                <Destaque item={destaque}/>
            }
            <div className='lists'>
            {fotoList.map((item, key)=>{
                return(
                    <div>                        
                        <FotosList key={key} title={item.title} items={item.items} slug={item.slug}/>
                    </div>
                    )
            })}
            </div>
        </section>
    )
}