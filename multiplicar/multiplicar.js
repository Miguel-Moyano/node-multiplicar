'use strict'
const fs = require('fs');


let listarTabla = (base, limitenode) => {
    for (let i = 0; i <= limitenode; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }

}


let crearArchivo = (base, limitenode) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limitenode)) {
            reject(`El valor introducido ${limitenode} no es un numero`);
            return;
        }

        let resultado = '';
        for (let i = 0; i <= limitenode; i++) {
            resultado += `${base} * ${i} = ${base*limitenodenode}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, resultado, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)


        });

    });
}
module.exports = {
    crearArchivo,
    listarTabla
}