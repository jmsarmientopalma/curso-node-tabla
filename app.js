const {crearArchivo} = require('./helpers/mutiplicar');
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then( archivo => {
        console.log('Se ha creado el archivo: '.yellow + `${archivo}`.red.bold);
    })
    .catch(e => console.log('Ha ocurrido el siguiente error:', e));