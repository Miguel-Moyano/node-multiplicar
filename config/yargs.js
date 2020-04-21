'use strict'

let opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('crear', 'genera un archivo con la tabla de multiplicar', opciones)
    .command('listar', 'imprime por consola la tabla de multiplicar', opciones)
    .argv;

module.exports = {
    argv
}