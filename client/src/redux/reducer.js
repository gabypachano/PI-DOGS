import React from 'react';
import { GET_ALLDOGS } from './types';

const initialState = {
    allDogs : [],
    temperaments: []

}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALLDOGS:
            return {
                ...state,
                allDogs: action.payload
            }

        
        default: 
        return {...state}

    }

}

export default rootReducer;