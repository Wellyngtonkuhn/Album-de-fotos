import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import './FotosList.css'


export default function FotosList({items}){

    return(
        <section>
            <div className='fotosSection'>
            {items.photos.length > 0 &&
                items.photos.map((item, key)=>{
                    return(
                    <div key={key} className='fotosRowItem'>
                        <img src={item.src.medium} alt={item.photographer}/>                      
                    </div>
                    )
                }) 
            }
            </div>
            <div className='paginacao'>
                <a><FaAngleLeft/></a>
                <a><FaAngleRight/></a>
            </div>
        </section>
    )
}