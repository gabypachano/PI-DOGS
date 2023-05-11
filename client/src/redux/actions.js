import axios from 'axios';
import { FILTER_ALL, FILTER_API, FILTER_DB, FILTER_TEMPERAMENT, GET_ALLDOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_ASC, ORDER_DES, ORDER_NAME, ORDER_WEIGHT_MAX, ORDER_WEIGHT_MIN, POST_DOG } from './types'

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

export const filterTemperament = (temperament) =>{
    return {
        type : FILTER_TEMPERAMENT,
        payload : temperament
    }
}

export const filterApi = () =>{
    return {
        type : FILTER_API
    }
}
export const filterDb = () =>{
    return {
        type : FILTER_DB
    }
}
export const filterAll = () =>{
    return {
        type : FILTER_ALL
    }
}

export const orderAsc = () =>{
    return{
        type : ORDER_ASC
    }
} 
export const orderDes = () =>{
    return{
        type : ORDER_DES
    }
} 

export const orderWeightMax = () =>{
    return{
        type : ORDER_WEIGHT_MAX
    }
} 
export const orderWeightMin = () =>{
    return{
        type : ORDER_WEIGHT_MIN
    }
}