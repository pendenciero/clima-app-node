const axios = require('axios');

const apiKey = '66edfcdb24a0d09fe6f43a83b67e1f23';

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ apiKey }`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}