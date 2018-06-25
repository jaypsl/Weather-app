// var getUser = (id,callback) => {
// var user = {
// 	id: id,
// 	name: 'jay'
// };   


// setTimeout = (() => {
// 	callback(user);
// },3000);
// };

// getUser(31, (userObject) => {
// console.log(userObject);
// });


function dostuff(){
	console.log("do something");
};

// setTimeout(dostuff,3000);



timeout(3000).then(dostuff)

// var u = function(papa,callback){
// 	var momomo = console.log("lalsla;cna");
// }
// callback(var);

function timeout(delay){
	return new Promise(function(resolve){
		setTimeout(resolve,delay);
	});
};

new Promise ...... function(resolve,reject){
	if(condition met){
		resolve("hjavcja")
	}
	else{
		reject("acgadc")
	}
}