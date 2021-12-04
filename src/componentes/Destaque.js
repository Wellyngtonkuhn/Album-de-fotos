import './Destaque.css'



export default function Destaque({item}){
console.log(item)
    return(
        <section className='destaque'style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage: `url(${item.src.original})`
        }}>
            <div className='destaqueVertical'>
                <div className='destaqueHorizontal'>
                    <div className='destaqueNome'>
                        <h3>{item.photographer}</h3>
                    </div>
                    <div className='destaqueBotao'>
                        <a href={item.photographer_url} alt={item.photographer_url} target='_blank'>Visitar Perfil no Pexels</a>
                    </div>      
                </div>
            </div>            

        </section>
    )
}