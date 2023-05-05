import axios from 'axios';
import { GET_ALLDOGS } from './types';


export const getAllDogs = () => {
    try {
        return async function(dispatch) {
            const endpoint = await axios.get('http://localhost:3001/dogs')
            return dispatch({
                type: GET_ALLDOGS,
                payload: endpoint.data
            })
           }
        } catch (error) {
            console.log(error.message)
        }
    }

// export const getStoreName = () => {
//     return async function(dispatch) {
//         let response = await axios('http://localhost:3001/store')

//         return dispatch({type: GET_STORE_NAME, payload: response.data.name})
//     }
// }