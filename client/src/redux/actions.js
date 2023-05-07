import axios from 'axios';
import { GET_ALLDOGS } from './types'

export const getAllDogs = () => async(dispatch) => {
    let endpoint = 'http://localhost:3001/dogs'
    await axios.get(endpoint)
    .then((response) => {
        dispatch({type: GET_ALLDOGS, payload: response.data})
    })
}