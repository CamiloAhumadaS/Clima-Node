const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    let encodeUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }



    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;


    /* console.log(`Dirección : ` + location.formatted_address);
    console.log(`Lat : ` + coordenadas.lat);
    console.log(`Lon : ` + coordenadas.lng);]*/
    // console.log(JSON.stringify(resp.data, undefined, 2)); //Strng convertido a JSON



    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng,
    }
}

module.exports = {
    getLugarLatLng
}