import './Header.css'


export default function Header({black }){

    return(
        <header className={black ? 'black' : ''}>
            <div className='logo'>
                <a href=''>
                    <img src='' alt=''/>
                </a>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Fotos</li>
                    <li>Api Pexels</li>
                    
                </ul>
            </nav>

        </header>
    )
}