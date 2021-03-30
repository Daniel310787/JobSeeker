var urlParams = new URLSearchParams(window.location.search); 

var company = urlParams.get('company');
var title = urlParams.get('title')
var id = urlParams.get('id')
var desc = urlParams.get('desc')
var link = urlParams.get('link')
var loc = urlParams.get('loc')

function getCompany(){
    var companies = {
    "id": id,
    "title": title,
    "company": company,
    "link": link,
    "loc": loc,
    "desc": desc,
    }
    var json = JSON.stringify(companies)
    fetch("http://localhost:3000/companies",{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: json
    })
    .then(response => console.log(response))
}
function createCompany() {
    var desc = document.getElementById("desc")
    var title = document.createElement("h1")
    desc.appendChild(title)
    user.innerHTML = "Position: " +title
    var company = document.createElement("h2")
    desc.appendChild(company)
    mail.innerHTML = "Company: " +company
    var loc = document.createElement("h3")
    desc.appendChild(loc)
    loc.innerHTML = "Location: "+loc
    var link = document.createElement("a")
    link.setAttribute("href",link)
    desc.appendChild(link)
    loc.innerHTML = "Location: "+link
    var desc = document.createElement("p")
    desc.appendChild(desc)
    loc.innerHTML = desc
}

window.addEventListener("load", getCompany)
window.addEventListener("load",createCompany)