import React from 'react';
import { GET_ALLDOGS, GET_ALLTEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_ASC, ORDER_DES, ORDER_WEIGHT_MAX, ORDER_WEIGHT_MIN, POST_DOG, RESET } from './types';

const initialState = {
    allDogs : [],
    temperaments: [],
    dogsFilter: [],
    dogDetail: {}
}
const rootReducer = (state = initialState, action) => {

    let aux1 = []

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
            return {
                ...state,
                dogsFilter: action.payload
            }

        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload
            }

        case POST_DOG:
            let dataArray = [...state.allDogs]
            dataArray.unshift(action.payload)
            return {
                ...state,
                allDogs: dataArray
            }

         case ORDER_ASC:
             aux1 = state.dogsFilter.sort((a,b)=>a.name.localeCompare(b.name))
             return{
                ...state,
                dogsFilter : aux1
             }
        case ORDER_DES:
            aux1 = state.dogsFilter.sort((a, b) => b.name.localeCompare(a.name))
            return{
                ...state,
                dogsFilter : aux1
             }

        case ORDER_WEIGHT_MIN:
            aux1 = state.dogsFilter.sort((a,b)=> Number(a.weightMin)-Number(b.weightMin))
            return{
                ...state,
                dogsFilter : aux1
             }

        case ORDER_WEIGHT_MAX:
            aux1 = state.dogsFilter.sort((a,b)=> Number(b.weightMax) - Number(a.weightMax))
            return{
                ...state,
                dogsFilter : aux1
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