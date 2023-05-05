import React from "react";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogs } from "../../redux/actions";

export default function Home() {

    // Para ir despachando mis acciones:
    const dispatch = useDispatch();

    //Esto es similar a usar mapStateToProps... Uso useSelector para traerme todo lo que está en el estado de allDogs
    const allDogs = useSelector((state) => state.allDogs)

    // Component didMount
    useEffect (() => {
        dispatch(getAllDogs());
    }, [])
    return(
        <div>

        </div>
    )
}