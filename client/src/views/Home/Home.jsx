import style from './Home.module.css'
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllDogs } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    // Para ir enviando mis acciones a redux y actualizar el estado global de la aplicación.
    const dispatch = useDispatch()
    // Aca estoy guardando todo lo que esta en el estado allDogs
    const dogs = useSelector((state) => state.allDogs) // -> Este es mi estado global

    useEffect (() => {
        dispatch(getAllDogs())
    }, [dispatch])

   

    return (
        <>
            <div
            className={style.container} >
                <Cards dogs={dogs}/>
            </div>
        </>
    )

}

export default Home;