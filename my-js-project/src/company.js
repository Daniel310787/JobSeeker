var btn = document.getElementById("btn").onclick = function(){
    var id = 1
    var company = document.getElementById("company").value
    var title = document.getElementById("position").value
    var loc = document.getElementById("loc").value
    var link = document.getElementById("link").value
    var desc = document.getElementById("desc").value
    window.alert("JOB CREATED")
    window.location.replace(`./comDesc.html?id=${id}&company=${company}&title=${title}&loc=${loc}&link=${link}&desc=${desc}`)
    
}