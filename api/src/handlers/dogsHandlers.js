const {Dog, Temperament} = require('../db')
const {getAllDogs, getDogsById} = require('../controllers/getAllDogs')

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
    const {name, image, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, temperament} = req.body
    try {

        let getTemperaments = await Temperament.findAll({
            where: {name: temperament},
        })
        getTemperaments = getTemperaments.map(el => el.id)

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

        if(!created) {
            res.status(400).send('Ya el perro existe...')
            return
        }
        await dog.addTemperaments(getTemperaments)
        let result 
        await Dog.findOne({
            where: {name},
            include: {
                model: Temperament,
                attributes: ['name']
            }
        })
        .then(res => result = createDogObjDB([res]))

        res.status(200).json(result)

    } catch (error) {
      res.status(400).send({message: 'Hubo un error al crear el perrito', error: error.message})  
    }
  }




module.exports = {
    allDogsHandler,
    dogsByIdHandler,
    createDogsHandler
}