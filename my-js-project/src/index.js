
// window.addEventListener("click" , () =>{
//     var loc = document.getElementById("loc").value
//     var job = document.getElementById("job").value
//     var btn = document.getElementById("btn")
//  	btn.setAttribute("href", `./ListJobs.html?location=${loc}&job=${job}`)
// })


window.onload = ()=>{
	fetch('http://localhost:3000/users/1',{
        method:"DELETE"
    })

	// .then(response => response.json())
	// .then(data => console.log(data))
}