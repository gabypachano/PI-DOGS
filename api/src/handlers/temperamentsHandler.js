const {getAllTemperaments} = require('../controllers/getAllTemperaments')


const allTemperamentsHandler = async (req,res) => {
    try {
        const all = await getAllTemperaments()
        res.status(200).json(all)    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    allTemperamentsHandler
}
        // let allTemperaments = []
        // const apiInfo = await getDogsApi();
        // let allTemp = (apiInfo.map(dog => dog.temperament)).join(', ').split(', ')
        // allTemp.forEach(el => {
        //     if(!allTemperaments.includes(el)) allTemperaments.push(el)
        // })
        // allTemperaments.sort()

        // // GET TEMPERAMENTS DB
        // await Promise.all(allTemperaments.map(temperament => {
        //     Temperament.findOrCreate({
        //         where: {name: temperament},
        //         defaults: {name: temperament}
        //     })
        // }))
        // const allTemperamentsDb = await Temperament.findAll()