
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.options({
	a:{demand: true, alias: 'address', describe: 'address to fetch weather for', string: true}
}).help().alias('help', 'h').argv;


geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
if(errorMessage){
	console.log(errorMessage);

}else{
	console.log(results.address);
	weather.getWeather(results.latitude, results.longitude, (errorMessage, WeatherResults)=> {
	if(errorMessage){
		console.log(errorMessage)
	}else{
		console.log(`IT IS CURRENTLY ${WeatherResults.temperature}. IT FEELS LIKE ${WeatherResults.apparentTemperature}`);
	}
});
}
});





// const temp = require('./.geocode/geocode');

// 	t:{demand: true, alias: 'temperature', describe: 'temerature to fetch', string: true }
// }).help().alias('help', 'h').argv;

// lat, lng, callback

