import { prop_venta,imprimirPropiedad } from './datos.js'

//cargar  lista completa de propiedades en venta

let divVentas = document.getElementById('row_propiedades')

for(let p of prop_venta){
    divVentas.innerHTML += imprimirPropiedad(p)
}