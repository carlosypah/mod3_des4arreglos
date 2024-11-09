export const prop_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/venta1.jpg',
        descripción: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4',
        banos:'4',
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/venta2.jpg',
        descripción: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2',
        banos:'1',
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/venta3.jpg',
        descripción: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3',
        banos:'3',
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: './assets/img/venta4.jpg',
        descripción: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4',
        banos:'4',
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: './assets/img/venta5.jpg',
        descripción: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2',
        banos:'1',
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: './assets/img/venta6.jpg',
        descripción: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3',
        banos:'3',
        costo: 4500,
        smoke: false,
        pets: true
    }
]

export const prop_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/alquiler1.jpeg',
        descripción: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2',
        banos:'2',
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/alquiler2.jpeg',
        descripción: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3',
        banos:'3',
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/img/alquiler3.jpeg',
        descripción: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2',
        banos:'2',
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: './assets/img/alquiler4.jpg',
        descripción: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2',
        banos:'2',
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: './assets/img/alquiler5.jpg',
        descripción: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3',
        banos:'3',
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: './assets/img/alquiler6.jpg',
        descripción: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2',
        banos:'2',
        costo: 2200,
        smoke: false,
        pets: false
    }
]

export function imprimirPropiedad(propiedad){
    // Recibo un objeto priopedad y preparo la impresión completa 
    // del div haciendo extrapolación de todas las priopiedades

    // Se retorna el div listo para llegar y sumar al html

    const smokeFalse = `<p class="text-danger"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    const smokeTrue = `<p class="text-success"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    const petsFalse = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`
    const petsTrue = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`


    let nuevaPropiedad = `<div class='col-md-4 mb-4'>
            <div class='card'>
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripción}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${new Intl.NumberFormat('es-CL', { maximumSignificantDigits: 5 }).format(
                    propiedad.costo)}</p>
                ${ propiedad.smoke ? smokeTrue : smokeFalse }
                ${ propiedad.pets ? petsTrue : petsFalse}
              </div>
            </div>
          </div>`

    return nuevaPropiedad
}