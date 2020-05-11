// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('====================='.blue);
    console.log(`   tabla de ${base} `);
    console.log('====================='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }



}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El número ingresado "${base}" no es un número`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}