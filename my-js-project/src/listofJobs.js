var urlParams = new URLSearchParams(window.location.search); 

var locs = urlParams.get('location');
var jobs = urlParams.get('job')


function Jobs() {
	document.querySelectorAll("div").forEach(element => {
    element.remove()
    })
	var url = "https://jooble.org/api/";
	var key = "281e5e02-f47b-41cb-a0e7-7ea5a33f21e1";
	var params = `{ keywords: "${jobs}", location: "${locs}"}`
	var http = new XMLHttpRequest();
	http.open("POST", url + key, true);
	http.setRequestHeader("Content-type", "application/json");
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var result = JSON.parse(http.responseText)
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locs}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
			.then(response => response.json())  
			.then(data => {
				var lat = data.coord.lat
				var lon = data.coord.lon
				mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMzEwNzg3IiwiYSI6ImNrbTRzZXR2ZzA3bHgycG93YzI1dmFyb3kifQ.av0j5J9UNRTWdRs9zXR8cg';
				var map = new mapboxgl.Map({
					container: "map", 
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [Math.floor(lon), Math.floor(lat)],
					zoom: 7,
				})
				result.jobs.forEach(element => {
					var str = element.location
					var arr = str.split(',')	
					arr = arr.splice(0,1)
					// console.log(arr)
					fetch(`https://api.openweathermap.org/data/2.5/weather?q=${arr}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
					.then(response => response.json())  
					.then(data => {
						var lat = data.coord.lat
						var lon = data.coord.lon
						// console.log(data)
						var marker = new mapboxgl.Marker()
						.setLngLat([Math.floor(lon), Math.floor(lat)])
						.addTo(map);
					})
				})	
				result.jobs.forEach(element => {
					var placeholder1 = document.getElementById("loc")
					placeholder1.setAttribute("placeholder",locs)
					var placeholder2 = document.getElementById("job")
					placeholder2.setAttribute("placeholder", jobs)
					var div = document.createElement("div")
					div.setAttribute("class", "cards")
					var jobName = document.createElement("h1")
					var br = document.createElement("br")
					div.appendChild(jobName)
					jobName.innerHTML = "Position: "  +element.title
					var br = document.createElement("br")
					div.appendChild(br)
					var company = document.createElement("h2")
					div.appendChild(company)
					company.innerHTML = "Company : " +element.company
					var place = document.createElement("h3")
					div.appendChild(place)
					place.innerHTML = "Location : " +element.location
					var link = document.createElement("a")
					link.setAttribute("id","sender")
					link.setAttribute("href", `DJobs.html?id=${element.id}&location=${element.location}&title=${element.title}`)
					div.appendChild(link)
					link.innerHTML = "More Info..."
					document.getElementById("results").appendChild(div)				
				})
			})
		}						
	}
	http.send(params);
}


window.addEventListener("load", Jobs)


function Jobs1() {
	document.querySelectorAll("div").forEach(element => {
    element.remove()
    })
	var job = document.getElementById("job").value
	var loc = document.getElementById("loc").value
	var url = "https://jooble.org/api/";
	var key = "281e5e02-f47b-41cb-a0e7-7ea5a33f21e1";
	var params = `{ keywords: "${job}", location: "${loc}"}`
	var http = new XMLHttpRequest();
	http.open("POST", url + key, true);
	http.setRequestHeader("Content-type", "application/json");
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var result = JSON.parse(http.responseText)
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
			.then(response => response.json())  
			.then(data => {
				var lat = data.coord.lat
				var lon = data.coord.lon
				mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMzEwNzg3IiwiYSI6ImNrbTRzZXR2ZzA3bHgycG93YzI1dmFyb3kifQ.av0j5J9UNRTWdRs9zXR8cg';
				var map = new mapboxgl.Map({
					container: "map", 
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [Math.floor(lon), Math.floor(lat)],
					zoom: 7,
				})
				result.jobs.forEach(element => {
					var str = element.location
					var arr = str.split(',')	
					arr = arr.splice(0,1)
					console.log(arr)
					fetch(`https://api.openweathermap.org/data/2.5/weather?q=${arr}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
					.then(response => response.json())  
					.then(data => {
						var lat = data.coord.lat
						var lon = data.coord.lon
						console.log(data)
						var marker = new mapboxgl.Marker()
						.setLngLat([Math.floor(lon), Math.floor(lat)])
						.addTo(map);
					})
				})	
				result.jobs.forEach(element => {
					
					var div = document.createElement("div")
					div.setAttribute("class", "cards")
					var jobName = document.createElement("h1")
					var br = document.createElement("br")
					div.appendChild(jobName)
					jobName.innerHTML = "Position: "  +element.title
					var br = document.createElement("br")
					div.appendChild(br)
					var company = document.createElement("h2")
					div.appendChild(company)
					company.innerHTML = "Company : " +element.company
					var place = document.createElement("h3")
					div.appendChild(place)
					place.innerHTML = "Location : " +element.location
					var link = document.createElement("a")
					link.setAttribute("id","sender")
					link.setAttribute("href", `DJobs.html?id=${element.id}&location=${element.location}&title=${element.title}`)
					div.appendChild(link)
					link.innerHTML = "More Info..."
					document.getElementById("results").appendChild(div)				
				})
			})
		}
	}
	http.send(params);

}

document.getElementById("loop").addEventListener("click", Jobs1)

