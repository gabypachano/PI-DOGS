import React from 'react';

const Card = ({image, name, temperament, weightMin, weightMax}) => {
    return(
        <div>
            <div>
            <img src={image} alt="Dog" />
            </div>
            <h3>{name}</h3>
            <div>
            {
                temperament?.map(dog => {
                    return(
                        dog.temperament
                    )
                })
            }
            </div>
            <div>
            <h3>{weightMin}</h3>
            <h3>{weightMax}</h3>
            </div>
        </div>
    )

}

export default Card;