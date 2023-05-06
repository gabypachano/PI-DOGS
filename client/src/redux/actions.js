import axios from 'axios';
import { GET_ALLDOGS } from './types';

// En este punto es donde conectamos el back con el front. Con esta action vamos a traernos todos los perritos
export const getAllDogs = () => {
    try { 
        console.log('ingresando al try de mi action')
        return async function(dispatch) {
            const endpoint = await axios.get('http://localhost:3001/dogs');
            return dispatch({
                type: GET_ALLDOGS,
                payload: endpoint.data
            })
        }
    } catch (error) {
        console.log('ingrese al catch de mi action')
        console.log(error.message)
    }
}

// export const getStoreName = () => {
//     return async function(dispatch) {
//         let response = await axios('http://localhost:3001/store')

//         return dispatch({type: GET_STORE_NAME, payload: response.data.name})
//     }
// }

