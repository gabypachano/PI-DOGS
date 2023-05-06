import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../Home/Home';

export default function LandingPage() {
    return(
        <div>
            <h1>Bienvenidos a mi App de Perritos</h1>
            <Link to ='/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}