function forEach(iterable, callback){
	// if(Array.isArray(iterable)){
	// 	for(let i = 0; i <iterable.length; i++){
	// 		callback(iterable[i], i, iterable);
	// 	}
	// }else{
	// 	for(let key in iterable){
	// 		callback(iterable[key], iterable);
	// 	}
	// }
	for(let key in iterable){
		callback(iterable[key], iterable);
	}

}