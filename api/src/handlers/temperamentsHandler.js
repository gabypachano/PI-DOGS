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