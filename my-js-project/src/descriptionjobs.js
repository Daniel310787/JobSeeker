
var urlParams = new URLSearchParams(window.location.search); 

var myParam = urlParams.get('id');
var loc = urlParams.get('location')
var title = urlParams.get('title')

window.addEventListener("load", () => {
    var url = "https://jooble.org/api/";
    var key = "281e5e02-f47b-41cb-a0e7-7ea5a33f21e1";
    var params = `{ keywords: "${title}", location: "${loc}"}`
    var http = new XMLHttpRequest();
    http.open("POST", url + key, true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var result = JSON.parse(http.responseText)
            console.log(myParam)
            console.log(loc)
            console.log(title)  
            console.log(result) 
            const found = result.jobs.find(element => element = myParam); 
            console.log(found)
            var title = document.createElement("h1")
            title.setAttribute("class", "job")
            title.innerHTML = found.title
            document.getElementById("card").appendChild(title)
            var company = document.createElement("h1")
            company.setAttribute("class", "company")
            company.innerHTML = found.company
            document.getElementById("card").appendChild(company)
            var description = document.createElement("p")
            description.setAttribute("class", "description")
            description.innerHTML = found.snippet
            document.getElementById("card").appendChild(description)
            var location = document.createElement("p")
            location.setAttribute("class", "loc")
            location.innerHTML = found.location
            document.getElementById("card").appendChild(location)
            var button = document.createElement("a")
            button.setAttribute("class", "link")
            button.setAttribute("href", found.link)
            button.innerHTML = "Apply Now"
            document.getElementById("card").appendChild(button)
        } 
        
    }
    http.send(params)      
})

function mapLoc() {
    var str = loc;
    var arr = str.split(',');
    arr = arr.splice(0, arr.length - 1)
    console.log(arr.join(','))
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${arr}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
    .then(response => response.json())  
    .then(data =>{
        var lat = data.coord.lat
        var lon = data.coord.lon
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMzEwNzg3IiwiYSI6ImNrbTRzZXR2ZzA3bHgycG93YzI1dmFyb3kifQ.av0j5J9UNRTWdRs9zXR8cg';
        var map = new mapboxgl.Map({
            container: "map", 
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [Math.floor(lon), Math.floor(lat)],
            zoom: 7 
        });
        var marker = new mapboxgl.Marker()
        .setLngLat([Math.floor(lon), Math.floor(lat)])
        .addTo(map);
    })
}
window.addEventListener("load", mapLoc)

window.onload = ()=>{
    fetch(`https://pixabay.com/api/?key=20828182-6a47e4ad98a805c77a0812254&q=${title}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.hits[0].largeImageURL)
        var div = document.createElement("pic")
        var pic = document.createElement("img")
        div.appendChild(pic)
        pic.setAttribute("src", data.hits[0].largeImageURL )
        pic.setAttribute("class", "img")
        pic.innerHTML = "hi"
        document.getElementById("pic").appendChild(div)
    })
}