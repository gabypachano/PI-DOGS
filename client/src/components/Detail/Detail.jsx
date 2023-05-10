import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogsDetail } from "../../redux/actions";
import { useEffect } from "react";

const Detail = () => {
    const dispatch = useDispatch()
    let {id} = useParams()

    useEffect(() => {
        dispatch(getDogsDetail(id))
    },[dispatch,id])

    const dog = useSelector((state) => state.dogDetail)
    console.log(dog)

    if(!id) return (<h1>Loading... ⏳</h1>)

    return(
        <>
        <div>
        <img src={dog.image} alt={dog.name}/>
        <h1>{dog.name?.toUpperCase()}</h1>
        </div>
        <div>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>

        <div>
            <h1>Maximum height: {dog.heightMax} cm</h1>
            <h1>Minimum height: {dog.heightMin} cm</h1>
            <h1>Maximum weight: {dog.weightMax} kg</h1>
            <h1>Minimum weight: {dog.weightMin} kg</h1>
            <h1>Temperament: {dog.temperament}</h1>
            <h1>Life span: {dog.lifeSpanMin} to {dog.lifeSpanMax} years old</h1>
        </div>
        
        </>
    )
}

// ID.
// Imagen.
// Nombre.
// Altura.
// Peso.
// Temperamentos.
// Años de vida.


export default Detail