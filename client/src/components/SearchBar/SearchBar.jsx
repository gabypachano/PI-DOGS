import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"

const SearchBar = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/detail/${name}`)
        setName('')
    }

    return(
        <div>
            <input
            type = 'text'
            placeholder = "Buscar..."
            value={name}
            onChange={(e) =>handleInputChange(e)}
            />
            <button type='submit' onClick={(e) => handleSubmit(e)}>Buscar 🔎</button>
        </div>
    )
}

export default SearchBar;