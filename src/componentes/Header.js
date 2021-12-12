import './Header.css'



export default function Header({black}){

    return(
        <header className={black ? 'black' : ''}>
            <div className='logo'>
                <a href='#home'>
                    ÁLBUM DE CASAMENTO<img src='' alt=''/>
                </a>
            </div>
            <nav>
                <ul>
                     <li><a href='#home'>Home</a></li>
                    <li><a href='#fotosSection'>Galeria</a></li>
                    <li><a href='https://www.pexels.com/pt-br/' target='_blank'>Api Pexels</a></li>
                    
                </ul>
            </nav>

        </header>
    )
}