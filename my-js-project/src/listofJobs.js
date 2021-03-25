var urlParams = new URLSearchParams(window.location.search); 

var locs = urlParams.get('location');
var jobs = urlParams.get('job')
console.log(locs)
console.log(jobs)

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
			console.log(result)
			result.jobs.forEach(element => {
				var name1 = document.createElement("div")
				var position = document.createElement("h1")
				name1.appendChild(position)
				position.setAttribute("class","caption")
				position.innerHTML = "Position:"
				var name2 = document.createElement("div")
				var source = document.createElement("h1")
				name2.appendChild(source)
				source.setAttribute("class","caption")
				source.innerHTML = "Company Name:"
				var fig = document.createElement("div")
				fig.setAttribute("class" ,"cards1")
				var jobName = document.createElement("h1")
				fig.appendChild(jobName)
				jobName.innerHTML = element.title
				var div = document.createElement("div")
                div.setAttribute("class", "cards")	
				var company = document.createElement("h2")
				div.appendChild(company)
				company.innerHTML =  element.company	
				var link = document.createElement("a")
				link.setAttribute("id","sender")
				link.setAttribute("href", `DescripAsso.html?id=${element.id}&location=${element.location}&title=${element.title}`)	
				div.appendChild(link)
				link.innerHTML = "More Info..."
				document.getElementById("image").appendChild(name1)
				document.getElementById("results").appendChild(name2)
				document.getElementById("image").appendChild(fig)
				document.getElementById("results").appendChild(div)
			});
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
			console.log(result)
			result.jobs.forEach(element => {
				var name1 = document.createElement("div")
				var position = document.createElement("h1")
				name1.appendChild(position)
				position.setAttribute("class","caption")
				position.innerHTML = "Position:"
				var name2 = document.createElement("div")
				var source = document.createElement("h1")
				name2.appendChild(source)
				source.setAttribute("class","caption")
				source.innerHTML = "Company Name:"
				var fig = document.createElement("div")
				fig.setAttribute("class" ,"cards1")
				var jobName = document.createElement("h1")
				fig.appendChild(jobName)
				jobName.innerHTML = element.title
				var div = document.createElement("div")
                div.setAttribute("class", "cards")	
				var company = document.createElement("h2")
				div.appendChild(company)
				company.innerHTML =  element.company	
				var link = document.createElement("a")
				link.setAttribute("id","sender")
				link.setAttribute("href", `DescripAsso.html?id=${element.id}&location=${element.location}&title=${element.title}`)	
				div.appendChild(link)
				link.innerHTML = "More Info..."
				document.getElementById("image").appendChild(name1)
				document.getElementById("results").appendChild(name2)
				document.getElementById("image").appendChild(fig)
				document.getElementById("results").appendChild(div)
			});
		}
	}
	http.send(params);
}

document.getElementById("btn").addEventListener("click", Jobs1)