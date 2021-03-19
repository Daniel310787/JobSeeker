

var url = "https://jooble.org/api/";
var key = "281e5e02-f47b-41cb-a0e7-7ea5a33f21e1";
var params = "{ keywords: 'it', location: 'Rome'}"

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var results = JSON.parse(http.responseText)
        console.log(results)
	}
}
//Send request to the server
http.send(params);