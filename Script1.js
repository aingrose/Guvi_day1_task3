
// Step 01: Create a XHR Object
var request = new XMLHttpRequest();
// Step 02: Specify the API
request.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded
//Server response will be of 200 status code.
//Functions: they are used to perform specific task
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);
}


let Object1 = {
    "name": "Maheshkumar",
    "age": "23"
 }
 
 let Object2 = {
     "age": "23",
     "name": "Maheshkumar"
 }
 
let key1 = Object.keys(Object1)
let key2 = Object.keys(Object2)
 
if(key1.length !== key2.length){
    console.log("not equal")
}else{
    let equal = true;

    for(i=0;i<key1.length;i++){
        var key = key1[i]
        if(Object1[key] !== Object2[key]){
            equal = false;
            break;
        }
    }
  if(equal){
    console.log("same")
  }else{
    console.log("not same")
  }

}

