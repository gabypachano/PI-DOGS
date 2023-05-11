const axios = require("axios");
const {API_KEY} = process.env
const {Dog, Temperament} = require("../db")

// Funcion para organizar la informacion que viene de la DB parecida a la que viene de la API
const createDogObjDB = (res) => {
    // Desustructuramos la informacion
    let { id, name, image, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, Temperaments } = res[0].dataValues
    // Recorremos el array de temperamentos, para organizarlo igual a como viene en la API
    let dogTemperaments = Temperaments.map(data => data.dataValues.name)
    dogTemperaments = [...dogTemperaments].join()
    // Retornamos el objeto ya organizado
    return dogObj = {
        id,
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
const getAllDogs = async(name) => {
    // Obtenemos data desde la API y la DB y la juntamos en un array
    const dogsDb = await getDogsDb();
    const dogsApi = await getDogsApi();
    const getAllDogs = dogsDb.concat(dogsApi);
    // Verificamos si recibimos un nombre por query
    let singleDog
    if(name) {
        // Filtramos para obtener el perro, si no consigue nada, regresamos un mensaje
        singleDog = getAllDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        if(singleDog.length === 0) return 'No se encontraron perros con ese nombre'
        return singleDog
    }
    // Si no se recibe nombre por query, regresamos el array completo
    return await getAllDogs;
}

//GET DOG BY ID
const getDogsById = async (id) =>{
    // Obtenemos el array con todos los perros
    const dogsInfo = await getAllDogs()
    // Buscamos por id, si no se encuentra se devuelve un mensaje
    const dogsById = await dogsInfo.find(dog => dog.id == id)
    if(dogsById.length === 0)  return 'No se encontraron perros con ese ID'
    return dogsById
}

const createDog = async (name, image, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, temperament) => {
    // Busca los temperamentos en la DB para obtener su ID
    let getTemperaments = await Temperament.findAll({
        where: {name: temperament},
    })
    getTemperaments = getTemperaments.map(el => el.id)
    // Se crea el perro en la DB
    const [dog, created] = await Dog.findOrCreate({
        where: {name},
        defaults: {
            name,
            image,
            heightMin,
            heightMax,
            weightMin,
            weightMax,
            lifeSpanMin,
            lifeSpanMax
        }
    }) 
    // Si ya esta creado, se devuelve un mensaje
    if(!created) {
        return 'Ya el perro existe...'
    }
    // Se hace la relacion del nuevo perro con los ID's obtenidos de los temperamentos
    await dog.addTemperaments(getTemperaments)

    // Obtenemos el nuevo perro creado, para organizar su informacion (igual a como viene de la API) y retornarlo
    let newDog 
    await Dog.findOne({
        where: {name},
        include: {
            model: Temperament,
            attributes: ['name']
        }
    })
    .then(res => newDog = createDogObjDB([res]))

    return newDog
}

module.exports = {
    getAllDogs,
    getDogsById,
    getDogsApi,
    getDogsDb,
    createDog
}