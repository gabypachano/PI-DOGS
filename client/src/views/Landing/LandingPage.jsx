import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css'



const LandingPage = () => {
   
    
    return(
            <div className={style.div1}>
                <div>
                    <h1>Bienvenidos a mi app de perritos</h1>
                </div>
                <div>
                    <div className={style.box1}>
                        <img src={require('../../assets/perritos.jpg').default} alt="img not found" width="250px"/>
                        <Link to="/home">
                                <button>Home</button>
                        </Link>
                    </div>
                </div>
                           
            </div>
    )
}

  



export default LandingPage;