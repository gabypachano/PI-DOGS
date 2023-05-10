import style from './Card.module.css'
import React from "react";
import { Link } from "react-router-dom";

//     Imagen. // Nombre. // Temperamentos. // Peso.
const Card = ({id, image, name, temperament, weightMin, weightMax}) => {
    return(
        <div className={style.card}>
            <h3>{name.toUpperCase()}</h3>
            <Link to={`/detail/${name}`}  >
            <div
            className={style.image} >
                <img src={image} alt={name}/>
            </div>
            </Link>
            <div
            className={style.info} >
                <p><span>Temperament:</span> <span className={style.temperament}>{temperament}</span></p>
            <p><span>Weight:</span> {weightMin} - {weightMax} kg</p>
            </div>
        </div>
    )
}

export default Card;