const axios = require("axios");
const {API_KEY} = process.env
const {Dog, Temperament} = require("../db")

const createDogObjDB = (res) => {
    let { name, image, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, Temperaments } = res[0].dataValues
    let dogTemperaments = Temperaments.map(data => data.dataValues.name)
    dogTemperaments = [...dogTemperaments].join()
    return dogObj = {
        name, 
        image, 
        heightMin, 
        heightMax, 
        weightMin, 
        weightMax, 
        lifeSpanMin, 
        lifeSpanMax, 
        temperament: dogTemperaments
    }
}


// En este caso, la forma de armar el back va a ser trayendome todos los datos de la api, el tema de paginado, filtros, ordenamientos lo vamos a manejar cuando estemos desarrollando el front




//GET API INFO -> //! Esta funcion llama al endpoint de la api y me trae toda la informacion que voy a necesitar 
const getDogsApi = async () => {
    try { 
    const miApi = await axios.get(`https://api.thedogapi.com/v1/breeds?${API_KEY}`)
    const allDogs = await miApi.data.map(dog => { 
        return {
            id: dog.id,
            name: dog.name,
            heightMin: dog.height.metric.split('-')[0],
            heightMax: dog.height.metric.split('-')[1],
            weightMin: dog.weight.metric.split('-')[0],
            weightMax: dog.weight.metric.split('-')[1],
            temperament: dog.temperament,
            image: dog.image.url,
            lifeSpanMin: dog.life_span.slice(0,7).split('-')[0],
            lifeSpanMax: dog.life_span.slice(0,7).split('-')[1],
        }
    })
    return allDogs;
} catch (error) {
        throw new Error(error.message);
    }
}

//GET DATABASE INFO
const getDogsDb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
        }
    })
    .then(responses => {
        return(
            responses.map(res => createDogObjDB([res]))
        )
    })
}

//CONCAT INFO API && DATABASE
const getAllDogs = async() => {
    const dogsDb = await getDogsDb();
    const dogsApi = await getDogsApi();
    const getAllDogs = dogsDb.concat(dogsApi);
    return await getAllDogs;
}

//GET DOG BY ID
const getDogsById = async (id) =>{
    const dogsInfo = await getAllDogs()
    const dogsById = await dogsInfo.find(dog => dog.id == id)
    return dogsById
}




module.exports = {
    getAllDogs,
    getDogsById,
    getDogsApi,
    getDogsDb
}