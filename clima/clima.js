const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cd0f82a6a817570ef17544b94837a56e`);

    return resp.data.main.temp;
}



module.exports = {
    getClima,
}