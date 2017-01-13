var homeButton = document.getElementById("navLink")
var newArticlesButton = document.getElementById("navLink2")
var contactButton = document.getElementById("navLink3")
var forumButton = document.getElementById("navLink4")
var hLink = document.getElementById("homeLink")
var naLink = document.getElementById("naLink")
var cLink = document.getElementById("contactLink")
var fLink = document.getElementById("forumLink")


homeButton.addEventListener("mouseover", function(){
	homeButton.setAttribute("style", "color: green; background-color: black;")
	hLink.setAttribute("href", "https://www.google.com")
})

newArticlesButton.addEventListener("mouseover", function(){
	newArticlesButton.setAttribute("style", "color: green; background-color: black;")
	naLink.setAttribute("href", "https://www.google.com")
})

contactButton.addEventListener("mouseover", function(){
	contactButton.setAttribute("style", "color: green; background-color: black;")
	cLink.setAttribute("href", "https://www.google.com")
})

forumButton.addEventListener("mouseover", function(){
	forumButton.setAttribute("style", "color: green; background-color: black;")
	fLink.setAttribute("href", "https://www.google.com")
})

homeButton.addEventListener("mouseout", function(){
	homeButton.setAttribute("style", "color: black; background-color: lightgrey;")
})

newArticlesButton.addEventListener("mouseout", function(){
	newArticlesButton.setAttribute("style", "color: black; background-color: lightgrey;")
})

contactButton.addEventListener("mouseout", function(){
	contactButton.setAttribute("style", "color: black; background-color: lightgrey;")
})

forumButton.addEventListener("mouseout", function(){
	forumButton.setAttribute("style", "color: bkacl; background-color: orange;")
})