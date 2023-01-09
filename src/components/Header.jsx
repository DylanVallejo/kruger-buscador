import React from 'react'
import '../App.css';

const Header = () => {
    return (
        <header className='headerApp'>
            <img className='kmaleonImg' alt = ' kmaleon' src={require('./imgs/kmaleon.png')}/>
            <div className='contenedorlogo'>
                <img  className='kImg' alt ='letra k' src={require('./imgs/kformatear.png')}/>
                <p className='spanHeader'>KrugerStar</p>
            </div>
            {/* <Typography align='center'>kruger weather</Typography> */}
            <p className='titleApp'>Kruger Buscador</p>
        </header>
    )
}

export default Header;