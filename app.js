//const axios = require('axios'); //llamamos al paquete axios 
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({ //Requerimos yargs y le damos las opciones correspondientes
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad',
            demand: true
        }
    })
    .argv;

let getInfo = async() => {
    try {
        let coordenadas = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima en ${coordenadas.direccion} es de ${temp}`;
    } catch (error) {
        return `No se puede determinar el clima en ${coordenadas.direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


/*    clima.getClima(11.0041072, -74.80698129999999)
    .then(temp => console.log(`La temperatura es : ${temp}`))
    .catch(e => console.log(e));


lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));*/