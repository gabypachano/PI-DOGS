import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import { useEffect } from 'react'
import { filterApi, filterDb, getAllDogs, orderAsc, orderDes, orderName, orderWeightMax, orderWeightMin } from '../../redux/actions'

const Filters = () => {
const dispatch = useDispatch()





// const handleOnClick = (e)=>{
//     e.preventDefault()
//     if(e.target.name === "des") {
//         dispatch(orderDes(e.target.value))
//     } 
//     if(e.target.name === "asc") {
//         dispatch(orderAsc(e.target.value))
//     }    
//     if(e.target.name === "max") {
//         dispatch(orderWeightMax(e.target.value))
//     }
//     if(e.target.name === "min") {
//         dispatch(orderWeightMin(e.target.value))
//     }
//     if(e.target.name === "all"){
//         dispatch(getAllDogs(e.target.value))
//     }
//     if(e.target.name === "api") {
//         dispatch(filterApi(e.target.value))
//     }    
//     if(e.target.name === "db") {
//         dispatch(filterDb(e.target.value))
//     }
//   

  return (
    <>
    <div>
            {/* <span > ORDER </span>
            <button name="asc" onClick={handleOnClick}>A - Z</button>
            <button name="des" onClick={handleOnClick}>Z - A</button>
            <button name="max" onClick={handleOnClick}>Weight Max</button>
            <button name="min" onClick={handleOnClick}>Weight Min</button> */}
    </div>


    </>
  )









}
   
export default Filters
