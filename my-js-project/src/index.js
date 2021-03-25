
window.addEventListener("click" , () =>{
    var loc = document.getElementById("loc").value
    var job = document.getElementById("job").value
    var btn = document.getElementById("btn")
 	btn.setAttribute("href", `./ListofAsso.html?location=${loc}&job=${job}`)
})