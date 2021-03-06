var axios = require('axios');


//http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=3ca4cb682481154e17368d817de04cb4

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=3ca4cb682481154e17368d817de04cb4';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location)
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

		return axios.get(requestUrl).then(function(res){
			// debugger;
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.response.data.message)
		})
	}
}