var urlParams = new URLSearchParams(window.location.search); 

var company = urlParams.get('company');
var title = urlParams.get('title')
var id = urlParams.get('id')
var desc = urlParams.get('desc')
var link = urlParams.get('link')
var loc = urlParams.get('loc')

function createCompany() {
    var div = document.getElementById("desc")
    var position = document.createElement("h1")
    div.appendChild(position)
    position.innerHTML = "Position: " +title
    var companyName = document.createElement("h1")
    div.appendChild(companyName)
    companyName.innerHTML = "Company: " +company
    var place = document.createElement("h1")
    div.appendChild(place)
    place.innerHTML = "Location: "+loc
    var info = document.createElement("h1")
    div.appendChild(info)
    info.innerHTML = "Description: " +desc
    var apply = document.createElement("a")
    apply.setAttribute("href",link)
    div.appendChild(apply)
    apply.innerHTML = "Apply Now"
    
}

function getCompany(){
    var users = {
        "id": Math.floor(id),
        "title": title,
        "company": company,
        "link": link,   
        "loc": loc,
        "desc": desc,
    }
    var json = JSON.stringify(users)
    fetch('http://localhost:3000/users',{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: json
    })
    .then(response => console.log(response))
}

window.addEventListener("load", getCompany)
window.addEventListener("load",createCompany)
