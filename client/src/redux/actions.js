import axios from 'axios';
import { GET_ALLDOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_DESC, GET_BY_DB, GET_BY_API, POST_DOG, WEIGHT_MIN, WEIGHT_MAX } from './types'

export const getAllDogs = () => async(dispatch) => {
    let endpoint = 'http://localhost:3001/dogs'
    await axios.get(endpoint)
    .then((response) => {
        dispatch({type: GET_ALLDOGS, payload: response.data})
    })
    .catch((error) => console.error(error))
};

export const getTemperaments = () => async(dispatch) => {
    await axios.get('http://localhost:3001/temperaments')
    .then((response) => {
        dispatch({type: GET_ALLTEMPERAMENTS, payload:response.data})
    })
    .catch((error) => console.error(error))
};

export const getDogsByName = (name) => async (dispatch) => { 
    await axios.get(`http://localhost:3001/dogs?name=${name}`)
    .then((response) => {
        dispatch({type: GET_DOG_BY_NAME, payload: response.data})
    })
    .catch((error) => console.error(error))
};

export const getDogsDetail = (id) => async (dispatch) => {
    await axios.get(`http://localhost:3001/dogs/${id}`)
    .then((response) => {
        dispatch({type: GET_DOG_DETAIL, payload: response.data})
    })
    .catch((error) => console.error(error))
};

export const postDog = (form) => {
    let endpoint = 'http://localhost:3001/dogs'
    return async (dispatch) => {
        await axios.post(endpoint, form)
        .then(res => {
            return dispatch({
                type: POST_DOG,
                payload: res.data
            })
        })
    }
}

export const orderDesc = () => {
    return {
        type: ORDER_DESC
    }
}

export const weightMin = () =>{
    return{
        type: WEIGHT_MIN,
    }
}

export const weightMax = () =>{
    return{
        type: WEIGHT_MAX,
    }
}

export const getByApi = () =>{
    return {
        type: GET_BY_API
    }
}

export const getByDb = () =>{
    return {
        type: GET_BY_DB
    }
}