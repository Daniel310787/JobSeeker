var urlParams = new URLSearchParams(window.location.search); 

var userName = urlParams.get('username');
var email = urlParams.get('email')
var id = urlParams.get('id')
var psw = urlParams.get('password')

function getUser(){
    var users = {
    "id": id,
    "Username": userName,
    "email": email,
    "password": psw
    }
    var json = JSON.stringify(users)
    fetch("https://localhost:3000/users",{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: json
    })
    .then(response => console.log(response))
}
function createUser() {
    var picture = document.getElementById("pic")
    var desc = document.getElementById("desc")
    var pic = document.createElement("img")
    pic.setAttribute("src", "./assets/images/profile/Rawah.jpg")
    picture.appendChild(pic)
    var user = document.createElement("h1")
    desc.appendChild(user)
    user.innerHTML = "User Name: " +userName
    var mail = document.createElement("h1")
    desc.appendChild(mail)
    mail.innerHTML = "Email Address: " +email
    var loc = document.createElement("h1")
    desc.appendChild(loc)
    loc.innerHTML = "Location: Milano"
}

window.addEventListener("load", getUser)
window.addEventListener("load",createUser)



