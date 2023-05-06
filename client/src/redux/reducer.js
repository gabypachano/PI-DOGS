import { GET_ALLDOGS } from "./types";

const initState = {
    allDogs: []
}

const rootReducer = (state = initState, {type, payload}) => {
console.log('type: ', type)
console.log('payload: ', payload)
    switch(type) {
        case GET_ALLDOGS:
            console.log('ingresando al reducer GET_ALLDOGS')
            return {
                ...state,
                allDogs: payload
            }

        default:
            console.log('ingresando al reducer default case')
            return {...state}
    }
}


export default rootReducer;