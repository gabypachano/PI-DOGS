import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage = () => {
   
    
    return(
        <div>
            <h1>Bienvenidos a mi App de Perritos</h1>
            <Link to='/home'>
                <button>Ir a Home</button>
            </Link>
        </div>
    )
}

  



export default LandingPage;