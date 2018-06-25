
var asyncAdd = (a,b) => {
	return new Promise((resolve, reject)=> {
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a+b);
			}else{
				reject('arguments must be numbers')
			}
		},1500);
	})
}

asyncAdd(5,'8').then((res)=>{
console.log('result:', res);
return asyncAdd(res, 40);
}).then((res) => {
	console.log('should be 53', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject)=> {
// setTimeout(() =>{
// //resolve('hey it worked'); 
// reject('unable to fulfill promise')
// },2500);


// });

// somePromise.then((message)=>{
// console.log('success', message);
// }, (errorMessage) =>{
// console.log('error', errorMessage); 
// })
