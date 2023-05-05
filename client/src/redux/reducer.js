import { GET_ALLDOGS } from "./types";

const initState = {
    allDogs: []
}

const rootReducer = (state = initState, {type, payload}) => {

    switch(type) {
        case GET_ALLDOGS:
            return {
                ...state,
                allDogs: payload
            }
    }

}


export default rootReducer;