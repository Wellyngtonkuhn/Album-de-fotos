import {useState, useEffect} from 'react'
import Destaque from './Destaque'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './Home.css'
import Loading from '../../src/loading.svg'

const API_KEY ='563492ad6f9170000100000153777882b0ff4d05b1a7609fdcfeb3f9'
const BASE_URL = 'https://api.pexels.com/v1/search?query=wedding&per_page=30'


export default function Home(){


    const [fotoList, setFotoList] = useState({})
    const [destaque, setDestaque] = useState(null)


    useEffect(()=>{
        fetch(BASE_URL,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: API_KEY
            },
        }).then((response) => response.json())
        .then((response)=>{
            setFotoList(response)
            

            let randomDestaque = Math.floor(Math.random() * (response.photos.length - 1))
            let aletorio = response.photos[randomDestaque]
            setDestaque(aletorio)
        })
      },[])
  

   

    return(
        <section id='home'>
            {destaque &&
                <Destaque item={destaque}/>
            }
            <div id='fotosSection' className='fotosSection'>
                {fotoList.photos && (
                    fotoList.photos.map((foto) =>(
                        <div key={foto.id} className='fotosRowItem'>
                            <img src={foto.src.medium}/>
                        </div>
                    ))
                )} 
            </div>
            <div className='paginacao'>
                <a><FaAngleLeft/></a>
                <a><FaAngleRight/></a>
            </div> 

            {!destaque &&
                <div className='loading'>   
                    <img src={Loading} alt='Loading'/>
                </div> 
            }
        </section>
    )
}