const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                default: 5,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Lista en consola la tabla generada'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Límite para el cálculo'
            })
            .check((argv,options) => {
                if (isNaN(argv.b)) {
                    throw 'La base debe ser un número.'
                }
                return true;
            })
            .argv;

module.exports = argv;