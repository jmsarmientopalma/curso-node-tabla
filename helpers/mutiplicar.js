const  fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base}`.blue + ' x '.gray + `${i}`.green + ' = '.gray + `${base * i}\n`.red;
    }

    if (listar){
        console.log('======================'.yellow);
        console.log('     Tabla del '.cyan.bold + `${base}`.cyan.bold);
        console.log('======================'.yellow);
        console.log(consola);
    }

    try {
        const fileName = `tabla-${base}.txt`;
        fs.writeFileSync(`./salida/${fileName}`, salida);

        return fileName;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
};