const yargs = require('yargs');

const axios = require('axios');

const argv = yargs.options({
	a:{demand: true, alias: 'address', describe: 'address to fetch weather for', string: true}
}).help().alias('help', 'h').argv;


var encodeAddress = encodeURIComponent(argv.address);
var geocodeurl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeurl).then((response)=> {

if(response.data.status === 'ZERO_RESULTS'){
	throw new Error('unable to find that address');
}


var lat = response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;
var weatherurl = `https://api.darksky.net/forecast/04e2225e1a2f2f2de2e955243a9ae8e2/${lat},${lng}`;
console.log(response.data.results[0].formatted_address);
return axios.get(weatherurl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`IT IS CURRENTLY ${temperature}. IT FEELS LIKE ${apparentTemperature}`)
}).catch((e)=> {if(e.code === 'ENOTFOUND'){
	console.log('can not connect to API server')
}else{
	console.log(e.message);
}});