import React from "react";
import axios from 'axios'
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from "../../redux/actions";
import {Link} from 'react-router-dom'
import Card from "../../components/Card/Card";

export default function Home() {

    // Para ir despachando mis acciones:
    const dispatch = useDispatch();

    //Esto es similar a usar mapStateToProps... Uso useSelector para traerme todo lo que está en el estado de allDogs
    const allDogs = useSelector(state => state.allDogs)

    // Me traigo del estado los perritos cuando el componente se monta
    useEffect (() => {
        dispatch(getAllDogs());
    }, [])

    // function handleClick(event) {
    //     event.preventDefault
    //     dispatch(getAllDogs());
    // }

    return(
        <div>
            <Link to= '/dogs'>Hola</Link>
            <h1>ESTAMOS EN EL HOME</h1>
            <button>Cargar todos los personajes</button>
            {/* <Card  name={singleDog.name}  weightMin={singleDog.weightMin} weightMax={singleDog.weightMax} /> */}
        </div>
    )
}