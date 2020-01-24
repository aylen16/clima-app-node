const lugar = require('./lugar/lugar')

const clima = require('./clima/clima')

//con options, especifico los comandos aceptados
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


/*lugar.getLugarLatLong(argv.direccion)
    .then(respuesta => console.log(respuesta))

clima.getClima(40.75000, -74.000000).then(resp => console.log(resp)).catch(err => console.log(err));*/

const getInfoClima = async(direccion) => {

    try {
        const infoLugar = await lugar.getLugarLatLong(direccion);
        const infoClima = await clima.getClima(infoLugar.lat, infoLugar.lng);

        return `El clima de ${direccion} es de ${infoClima}`;

    } catch {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};


getInfoClima(argv.direccion)
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log('Error: ', err));