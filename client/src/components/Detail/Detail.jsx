import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDogsDetail } from "../../redux/actions";
import { useEffect } from "react";
import axios from 'axios';


const Detail = () => {
    let { id } = useParams()
    const [dog, setDog] = useState()
    const getDog = async (dog) => {
        await axios.get(`http://localhost:3001/dogs?name=${dog}`)
        .then(res => setDog(res.data[0]))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getDog(id)
    },[id])
    
    return(
        <>
            <div>
                <img src={dog?.image} alt={dog?.name}/>
                <h1>{dog?.name?.toUpperCase()}</h1>
            </div>

            <div>
                <h1>Minimum height: {dog?.heightMin} cm</h1>
                <h1>Maximum height: {dog?.heightMax} cm</h1>
                <h1>Minimum weight: {dog?.weightMin} kg</h1>
                <h1>Maximum weight: {dog?.weightMax} kg</h1>
                <h1>Temperaments: {dog?.temperament}</h1>
                <h1>Life span: {dog?.lifeSpanMin} to {dog?.lifeSpanMax} years old</h1>
            </div>
        </>
    )
}

export default Detail