const {Temperament} = require('../db')
const {getDogsApi} = require('./getAllDogs')


const getAllTemperaments = async () =>{
    // Hacemos llamado a la API para obtener todos los temperamentos
    let allTemperaments = []
    const apiInfo = await getDogsApi();
    // Separamos cada temperamento
    let allTemp = (apiInfo.map(dog => dog.temperament)).join(', ').split(', ')

    // Creamos un array con los temperamentos sin que se repitan
    allTemp.forEach(el => {
        if(!allTemperaments.includes(el)) allTemperaments.push(el)
    })
    allTemperaments.sort()
    // Guardamos los temperamentos en la DB con findOrCreate por si ya existian
    await Promise.all(allTemperaments.map(temperament => {
        Temperament.findOrCreate({
            where: {name: temperament},
            defaults: {name: temperament}
        })
    }))
    // Obtenemos todos los temperamentos de la DB y los retornamos
    const allTemperamentsDb = await Temperament.findAll()

    return allTemperamentsDb
}

module.exports = {
    getAllTemperaments
}