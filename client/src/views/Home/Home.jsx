import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllDogs } from '../../redux/actions'

const Home = () => {
    // Para ir enviando mis acciones a redux y actualizar el estado global de la aplicación.
    const dispatch = useDispatch()
    // Aca estoy guardando todo lo que esta en el estado allDogs
    const dogs = useSelector((state) => state.allDogs)

    useEffect (() => {
        dispatch(getAllDogs())
    }, [])

   

    return (
        <div>
            <h1>ESTAMOS EN HOME</h1>
        </div>
    )

}

export default Home;