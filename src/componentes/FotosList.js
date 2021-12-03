import React from "react"
import './FotosList.module.css'





export default function FotosList({title, items}){


    return(
        <section>
            <h2>{title}</h2>
             <div className='fotosListArea'>
                {items.photos.length > 0 &&

                    items.photos.map((item, hey)=>{
                        return(
                        <div>
                            <img src={item.src.medium}/>
                            
                        </div>
                        )
                    })
                   
                }


           
            </div>

        </section>
    )
}