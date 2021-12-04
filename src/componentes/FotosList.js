import React, {useState} from "react"
import './FotosList.css'





export default function FotosList({title, items}){
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    const handleLeftSide = () =>{
        let x = left + Math.round(window.innerWidth / 2)
        if(x > 0){
            x=0
        }
        setLeft(x)
    }

    const handleRightSide = () =>{
        let x = left - Math.round(window.innerWidth / 2)
        let listW = items.photos.length * 200
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60

        }
        setLeft(x)
    }



    return(
        <section className='fotosRow'>
            <h2>{title}</h2>
            <div className='fotosListAreaFeft' onClick={handleLeftSide}>
                -
            </div>
            <div className='fotosListAreaRight' onClick={handleRightSide}>
                +
            </div>
            <div className='fotosListArea'>
                <div className='fotosList' style={{
                    marginLeft: left,
                    width: items.photos.length * 200
                }}>
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
            </div>
        </section>
    )
}