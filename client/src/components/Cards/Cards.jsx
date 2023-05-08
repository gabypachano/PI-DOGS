import { useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Cards = ({dogs}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8) // Mi paginado es de 8 perros por pagina
    const indexOfLastDog = currentPage * dogsPerPage // 1 * 8 = 8
    const indexOfFirstDog = indexOfLastDog - dogsPerPage // 8 - 8 = 0
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog) // Me traigo mi estado global, este estado va a tener todos los perritos
 
    
    const pageNumber = [];

    for (let i=0; i <=Math.ceil(dogs/dogsPerPage); i++) {
        pageNumber.push(i)
    }

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return(
        <div>
            {
                currentDogs?.map(dog => (
                    <Card 
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    image={dog.image}
                    weightMin={dog.weightMin}
                    weightMax={dog.weightMax}
                    heightMin={dog.heightMin}
                    heightMax={dog.heightMax}
                    lifeSpanMin={dog.lifeSpanMin}
                    lifeSpanMax={dog.lifeSpanMax}
                    temperament={dog.temperament}
                    />
                ))
            }
        </div>
    )






}


export default Cards;