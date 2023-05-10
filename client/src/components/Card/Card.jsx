import style from './Card.module.css'
import React from "react";
import { Link } from "react-router-dom";

//     Imagen. // Nombre. // Temperamentos. // Peso.
const Card = ({id, image, name, temperament, weightMin, weightMax}) => {
    return(
        <div className={style.card}>
            <h3>{name}</h3>
            <Link to={`/detail/${id}`}  >
            <div>
            <img src={image} alt={name}/>
            </div>
            </Link>
            <h3>Weight: {weightMin} - {weightMax} Kg</h3>
            <h3>Temperament: {temperament}</h3>
        </div>
    )
}

export default Card;