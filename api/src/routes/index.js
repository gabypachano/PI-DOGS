const { Router } = require('express');
const router = Router();
const routesDogs = require('./routesDogs')
const routesTemperaments = require('./routesTemperaments')

// Ejemplo: const authRouter = require('./auth.js');
// Importar todos los routers;



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", routesDogs);

router.use("/temperaments", routesTemperaments);



module.exports = router;
