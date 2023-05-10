import axios from 'axios'
import React from 'react';
import { GET_ALLDOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_DESC, GET_BY_DB, GET_BY_API, POST_DOG, WEIGHT_MIN, WEIGHT_MAX, RESET } from './types';

const initialState = {
    allDogs : [],
    temperaments: [],
    dogsFilter: [],
    dogDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALLDOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogsFilter: action.payload
            }
        case GET_ALLTEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }

        case GET_DOG_BY_NAME:
            console.log('estoy pasando por getdogbyname')
            return {
                ...state,
                dogsFilter: action.payload
            }

        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload[0]
            }

        case POST_DOG:
            let dataArray = [...state.allDogs]
            dataArray.unshift(action.payload)
            return {
                ...state,
                allDogs: dataArray
            }

        case ORDER_DESC: 
            const orderInfo = state.dogsFilter.reverse()
            return {
                ...state,
                dogsFilter: orderInfo
            }

        case GET_BY_DB:
            const dbInfo = state.dogsFilter.filter(dog => !/^[0-9,$]*$/.test(dog.id));
            return{
                ...state,
                dogsFilter: dbInfo
            }

        case GET_BY_API:
            // Filtra por ID que sea solo numero
            const apiInfo = state.dogsFilter.filter(dog => /^[0-9,$]*$/.test(dog.id));
            return{
                ...state,
                dogsFilter: apiInfo
            }

        case WEIGHT_MIN:
            // Ordena de menor a mayor
            return {
                ...state,
                dogsFilter: state.dogsFilter.sort((a, b) => a.weightMin - b.weightMin)
            }

        case WEIGHT_MAX:
            return {
                ...state,
                dogsFilter: state.dogsFilter.sort((a, b) => b.weightMax - a.weightMax)
            }

        case RESET:
            return{
                ...state,
                allDogs: state.allDogs
            }

        default: 
        return {...state}
    }

}

export default rootReducer;