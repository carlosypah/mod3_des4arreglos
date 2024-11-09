import { prop_venta,prop_alquiler,imprimirPropiedad } from './datos.js'

//cargar 3 propiedades en venta y 3 en alquiler

//mostramos solo 3 elementos de cada arreglo en el index
const cantVentas = 3
const cantAlquiler = 3

//mostramos las ventas
let divVentas = document.getElementById('row_ventas')

let contadorVentas = 0
while(contadorVentas < cantVentas)
{
    divVentas.innerHTML += imprimirPropiedad(prop_venta[contadorVentas])
    contadorVentas++
}

//mostramos los alquileres
let divAlquiler = document.getElementById('row_alquiler')

let contadorAlquiler = 0
while(contadorAlquiler < cantAlquiler){
    divAlquiler.innerHTML += imprimirPropiedad(prop_alquiler[contadorAlquiler])
    contadorAlquiler++
}    
