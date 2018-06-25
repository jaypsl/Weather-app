const request = require('request');


var getWeather = (lat, lng, callback) => {
request({
	url: `https://api.darksky.net/forecast/04e2225e1a2f2f2de2e955243a9ae8e2/${lat},${lng}`,
	json: true
}, (error, response, body) => {
	if(error){callback('unable to connect to the forecast.io server');}
		else if(response.statusCode === 400){callback('unable to fetch weather');}
		else if(response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
	}
		
	});
};

module.exports.getWeather = getWeather; 