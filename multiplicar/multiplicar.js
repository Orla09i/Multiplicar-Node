const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    let resultado = 0;
    let data = '';

    for (let i = 1; i <= limite; i++) {
        resultado = base * i;
        data += (`${base} * ${i} = ${resultado}\n`);
    }

    return console.log(data);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return;
        }

        let resultado = 0;
        let data = '';

        for (let i = 1; i <= limite; i++) {
            resultado = base * i;
            data += (`${base} * ${i} = ${resultado}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}