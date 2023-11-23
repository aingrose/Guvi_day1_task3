var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.send();

request.onload = function() {
    var result = JSON.parse(request.response);
    for(var a in result){
        
		console.log(result[a].region)
      	console.log(result[a].subregion)
      	console.log(result[a].population)
    }
}