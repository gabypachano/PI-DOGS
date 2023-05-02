const {Router} = require('express');
const router = Router();
const {allTemperamentsHandler} = require('../handlers/temperamentsHandler')

router.get('/', allTemperamentsHandler)


module.exports = router