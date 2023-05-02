const {getAllDogs, getDogsApi} = require('../controllers/getAllDogs')
const {Temperament} = require('../db')



const allTemperamentsHandler = async (req,res) => {
    try {
        let allTemperaments = []
        const apiInfo = await getDogsApi();
        let allTemp = (apiInfo.map(dog => dog.temperament)).join(', ').split(', ')
        allTemp.forEach(el => {
            if(!allTemperaments.includes(el)) allTemperaments.push(el)
        })
        allTemperaments.sort()

        // GET TEMPERAMENTS DB
        await Promise.all(allTemperaments.map(temperament => {
            Temperament.findOrCreate({
                where: {name: temperament},
                defaults: {name: temperament}
            })
        }))
        const allTemperamentsDb = await Temperament.findAll()
        
        res.status(200).json(allTemperamentsDb)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}






module.exports = {
    allTemperamentsHandler
}