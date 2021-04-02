
window.addEventListener("click" , () =>{
    var loc = document.getElementById("loc").value
    var job = document.getElementById("job").value
    var btn = document.getElementById("btn")
 	btn.setAttribute("href", `./ListJobs.html?location=${loc}&job=${job}`)
})


//  window.onload = ()=>{
//      fetch('http://localhost:3000/users')
//      .then(response => (response.json()))
//     .then(data => console.log(data))
// }


var textWrapper = document.querySelector('.catchy .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.catchy .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.catchy',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });