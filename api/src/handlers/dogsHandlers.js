const {getAllDogs, getDogsById} = require('../controllers/getAllDogs')

const allDogsHandler = async (req, res) =>{
    try{
    const apiInfo = await getAllDogs();
    const {name} = req.query
    if(req.query.hasOwnProperty('name')) {
        const dogsname = apiInfo.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        if(dogsname.length !== 0) {
            res.status(200).json(dogsname)
        return;
    }
    
        res.status(400).send({message: 'No se encontraron perros con ese nombre'})
        return;
    }
    else {
    
        res.status(200).json(apiInfo)
        }
    }catch(error){
        res.status(400).send({message: 'No se pudo obtener todos los perritos', error: error.message})
    }
}

const dogsByIdHandler = async (req,res) => {
    const {id} = req.params   
    try {
      const dogsId = await getDogsById(id)
      if(dogsId.length !== 0) {
        res.status(200).send(dogsId)
        return;
      }
    }catch(error) {
        res.status(400).send({message: `No se encontró el perrito con el ID: ${id}`, error: error.message})
    }
}

const createDogsHandler = async (req, res) => {

}


module.exports = {
    allDogsHandler,
    dogsByIdHandler,
    createDogsHandler
}