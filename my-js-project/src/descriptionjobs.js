
var urlParams = new URLSearchParams(window.location.search); 

var myParam = urlParams.get('id');
var loc = urlParams.get('location')
var title = urlParams.get('title')

window.addEventListener("load", () => {
    document.querySelectorAll("div").forEach(element => {
    element.remove()
    })
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
            title.innerHTML = found.title
            document.getElementById("card").appendChild(title)
            var company = document.createElement("h1")
            company.innerHTML = found.company
            document.getElementById("card").appendChild(company)
            var description = document.createElement("p")
            description.innerHTML = found.snippet
            document.getElementById("card").appendChild(description)
            var location = document.createElement("p")
            location.innerHTML = found.location
            document.getElementById("card").appendChild(location)
            var button = document.createElement("a")
            button.setAttribute("href", found.link)
            button.innerHTML = "Apply Now"
            document.getElementById("card").appendChild(button)

        }  
    }
    http.send(params)      
})


