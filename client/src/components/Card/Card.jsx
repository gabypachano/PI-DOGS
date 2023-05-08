import React from "react";

//     Imagen. // Nombre. // Temperamentos. // Peso.
const Card = ({image, name, temperament, weightMin, weightMax}) => {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image} alt="img not found" width="400px" height="450px"/>
            <h3>{weightMin}</h3>
            <h3>{weightMax}</h3>
            <div>
                {
                    console.log(temperament)
                    // temperament?.map((temp, index) => {
                    //     return(
                    //         <div>
                    //         key={index}
                    //         {temp}
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </div>
    )
}

export default Card;