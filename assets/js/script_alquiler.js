import { prop_alquiler,imprimirPropiedad } from './datos.js'

//cargar todas las propiedades alquiler

let divAlquiler = document.getElementById('row_propiedades')

for(let p of prop_alquiler){
    divAlquiler.innerHTML += imprimirPropiedad(p)
}