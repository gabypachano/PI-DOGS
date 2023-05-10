import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const handleInputChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
        console.log(name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getDogsByName(name))
    }

    return(
        <div>
            <input
            type = 'text'
            placeholder = "Buscar..."
            value={name}
            onChange={(event) =>handleInputChange(event)}
            />
            <button type='submit' onClick={(event) => handleSubmit(event)}>Buscar 🔎</button>
        </div>
    )
}

export default SearchBar;