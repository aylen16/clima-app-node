const axios = require('axios');

const appId = 'cac265aa0629bbc5c2b618912c243f21';

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}`);

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}