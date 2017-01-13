document.getElementById("navLink").addEventListener("mouseover", function(){
	document.getElementById("navLink").setAttribute("style", "color: green; background-color: black;")
	document.getElementById("homeLink").setAttribute("href", "https://www.google.com")
})

document.getElementById("navLink2").addEventListener("mouseover", function(){
	document.getElementById("navLink2").setAttribute("style", "color: green; background-color: black;")
	document.getElementById("naLink").setAttribute("href", "https://www.google.com")
})

document.getElementById("navLink3").addEventListener("mouseover", function(){
	document.getElementById("navLink3").setAttribute("style", "color: green; background-color: black;")
	document.getElementById("contactLink").setAttribute("href", "https://www.google.com")
})

document.getElementById("navLink4").addEventListener("mouseover", function(){
	document.getElementById("navLink4").setAttribute("style", "color: green; background-color: black;")
	document.getElementById("forumLink").setAttribute("href", "https://www.google.com")
})

document.getElementById("navLink").addEventListener("mouseout", function(){
	document.getElementById("navLink").setAttribute("style", "color: black; background-color: lightgrey;")
})

document.getElementById("navLink2").addEventListener("mouseout", function(){
	document.getElementById("navLink2").setAttribute("style", "color: black; background-color: lightgrey;")
})

document.getElementById("navLink3").addEventListener("mouseout", function(){
	document.getElementById("navLink3").setAttribute("style", "color: black; background-color: lightgrey;")
})

document.getElementById("navLink4").addEventListener("mouseout", function(){
	document.getElementById("navLink4").setAttribute("style", "color: bkacl; background-color: orange;")
})