


function Jobs() {
	document.querySelectorAll("div").forEach(element => {
		element.remove()
	})
	var city = document.getElementById("loc").value;
	var url = "https://jooble.org/api/";
	var key = "281e5e02-f47b-41cb-a0e7-7ea5a33f21e1";
	var params = `{ keywords: " ", location: "${city}"}`
	var http = new XMLHttpRequest();
	http.open("POST", url + key, true);
	http.setRequestHeader("Content-type", "application/json");
	http.onreadystatechange = function() {
		if(http.readyState == 4 && http.status == 200) {
			var result = JSON.parse(http.responseText)
			console.log(result)
			result.jobs.forEach(element => {
				console.log(element.title)
				var div = document.createElement("div")
				var jobName = document.createElement("h2")
				jobName.innerHTML = element.title
				div.appendChild(jobName)
				var company = document.createElement("h1")
				div.appendChild(company)
				company.innerHTML = element.company
				var Description = document.createElement("p")
				div.appendChild(Description)
				Description.innerHTML = element.snippet
				var link = document.createElement("a")
				link.setAttribute("href", element.link)
				div.appendChild(link)
				link.innerHTML = "More Info"
				document.body.appendChild(div)
			});
		}
	}
	http.send(params);
}
document.getElementById("btn").addEventListener("click", Jobs)

export {Jobs as default};