//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Dog, Temperament} = require('./src/db.js')
const mockDogs = require('./src/MOCK_DATA.json')
const mockTemperaments = require('./src/MOCK_DATA_TEMPERAMENTS.json')


const filledDogs = async() =>{
  mockDogs.map((dog) => Dog.create({
      name: dog.name,
      heightMin: dog.heightMin,
      heightMax: dog.heightMax,
      weightMin: dog.weightMin,
      weightMax: dog.weightMax,
      temperament: dog.temperament,
      image: dog.image,
      lifeSpanMin: dog.lifeSpanMin,
      lifeSpanMax: dog.lifeSpanMax
  }))
}

const filledTemperament = async () =>{
  mockTemperaments.map((dog) => Temperament.create({
    name: dog.name
  }))
}

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    filledDogs()
    filledTemperament()
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
