import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTemperaments, postDog } from '../../redux/actions'

// Estilos
// Manejo de errores

const Form = () => {
    const dispatch = useDispatch()
    const temperaments = useSelector(state => state.temperaments)
    const [form, setForm] = useState({
        name: '', 
        image: '', 
        heightMin: '', 
        heightMax: '', 
        weightMin: '', 
        weightMax: '', 
        lifeSpanMin: '', 
        lifeSpanMax: '', 
        temperament: [],
    })
    const initialState = {
        name: '', 
        image: '', 
        heightMin: '', 
        heightMax: '', 
        weightMin: '', 
        weightMax: '', 
        lifeSpanMin: '', 
        lifeSpanMax: '', 
        temperament: [],
    }
    const [selectedTemps, setSelectedTemps] = useState([])
    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }
    const handleTempsChange = (e) => {
        if(![...selectedTemps].includes(e.target.value)) {
            setSelectedTemps(current => [...current, e.target.value])
        }
    }
    const removeTemps = (temp) => {
        let dataArray = [...selectedTemps].filter(el => el !== temp)
        setSelectedTemps(dataArray)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setForm({
            ...form, types: form.temperament.push(...selectedTemps)
        })
        dispatch(postDog(form))
        setForm(initialState)
        setSelectedTemps([])
        alert('Formulario enviado con exito!')
    }

    useEffect(() => {
        dispatch(getTemperaments())
    }, [])

    return(
        <>
            <div
            className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name </label>
                        <input 
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Image </label>
                        <input 
                        type="text"
                        name="image"
                        required
                        value={form.image}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Minimum height </label>
                        <input 
                        type="number"
                        name="heightMin"
                        required
                        value={form.heightMin}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Maximum height </label>
                        <input 
                        type="number"
                        name="heightMax"
                        required
                        value={form.heightMax}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Minimum weight </label>
                        <input 
                        type="number"
                        name="weightMin"
                        required
                        value={form.weightMin}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Maximum weight </label>
                        <input 
                        type="number"
                        name="weightMax"
                        required
                        value={form.weightMax}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Minimum life span </label>
                        <input 
                        type="number"
                        name="lifeSpanMin"
                        required
                        value={form.lifeSpanMin}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Maximum life span </label>
                        <input 
                        type="number"
                        name="lifeSpanMax"
                        required
                        value={form.lifeSpanMax}
                        onChange={handleChange} />
                    </div>
                    <div
                    className={styles.types} >
                        {
                            selectedTemps?.map(temp => {
                                return (
                                    <span
                                    key={temp} >
                                    {temp}
                                    <button
                                    onClick={() => removeTemps(temp)} >
                                    X
                                    </button>
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div>
                        <select 
                        name="temperaments" 
                        onChange={handleTempsChange} >
                            <option>Temperaments</option>
                            {
                                temperaments?.map(type => {
                                    return (
                                        <option
                                        key={type.id}
                                        value={type.name} >
                                            {type.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button
                    className={styles.sendButton}
                    type="submit" >
                    ENVIAR
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form