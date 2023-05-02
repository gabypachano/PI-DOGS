const {Router} = require('express')
const router = Router()
const { allDogsHandler, dogsByIdHandler  } = require('../handlers/dogsHandlers');


router.get('/', allDogsHandler);
router.get('/:id', dogsByIdHandler);
// router.post('/',)



module.exports = router