const axios = require('axios');
const {API_KEY} = process.env
const {Dog, Temperament} = require('../db')


// const getTemperamentsApi = async () => {
//     const miApi = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
//     const allTemperaments = await miApi.data.map(dog => {
//         return {
//             temperamento: dog.temperament
//         }
//     })
// }