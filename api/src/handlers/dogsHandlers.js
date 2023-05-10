const {getAllDogs, getDogsById, createDog} = require('../controllers/getAllDogs')

const allDogsHandler = async (req, res) =>{
    try{
        const {name} = req.query
        const apiInfo = await getAllDogs(name);
        res.status(200).json(apiInfo)

    }catch(error){
        res.status(400).send({message: 'No se pudo obtener todos los perritos', error: error.message})
    }
}

const dogsByIdHandler = async (req,res) => {
    try {
        const {id} = req.params   
        const dogsId = await getDogsById(id)
        res.status(200).send(dogsId)
    }catch(error) {
        res.status(400).send({message: `No se encontró el perrito con el ID: ${id}`, error: error.message})
    }
}

const createDogsHandler = async (req, res) => {
    try {
        const {name, image, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, temperament} = req.body
        let newDog = await createDog(name, image, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, temperament)
        res.status(200).json(newDog)

    } catch (error) {
      res.status(400).send({message: 'Hubo un error al crear el perrito', error: error.message})  
    }
}

module.exports = {
    allDogsHandler,
    dogsByIdHandler,
    createDogsHandler
}