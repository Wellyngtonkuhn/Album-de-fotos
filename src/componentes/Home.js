import {useState, useEffect} from 'react'
import Destaque from './Destaque'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './Home.css'
import Loading from '../../src/loading.svg'

const API_KEY ='563492ad6f9170000100000153777882b0ff4d05b1a7609fdcfeb3f9'

export default function Home(){

    const [fotoList, setFotoList] = useState({})
    const [destaque, setDestaque] = useState(null)
    const [page, setPage] = useState(1)


    useEffect(()=>{
        fetch(`https://api.pexels.com/v1/search/?page=${page}&per_page=30&query=wedding`,{
            headers:{
                'Content-Type': 'application/json',
                Authorization: API_KEY
            },
        }).then((response) => response.json())
        .then((response)=>{
            setFotoList(response)
            
            // Gerando um item alatório para o componente Destaque
            let randomDestaque = Math.floor(Math.random() * (response.photos.length - 1))
            let aletorio = response.photos[randomDestaque]
            setDestaque(aletorio)
        })
      },[page])

      // Funções para a paginação 
      function prevPage(){
        setPage(page - 1)
        if(page <= 1){
            setPage(1)
        }
      }

      function nextPage(){
          setPage(page + 1)
      }
  

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
                <a href='#topo' onClick={prevPage}><FaAngleLeft/></a>
                <a href='#topo' onClick={nextPage}><FaAngleRight/></a> 
            </div> 

            {!destaque &&
                <div className='loading'>   
                    <img src={Loading} alt='Loading'/>
                </div> 
            }
        </section>
    )
}