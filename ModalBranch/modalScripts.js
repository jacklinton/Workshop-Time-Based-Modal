var homeButton = document.getElementById("navLink")
var newArticlesButton = document.getElementById("navLink2")
var contactButton = document.getElementById("navLink3")
var forumButton = document.getElementById("navLink4")
var hLink = document.getElementById("homeLink")
var naLink = document.getElementById("naLink")
var cLink = document.getElementById("contactLink")
var fLink = document.getElementById("forumLink")
var mainBody = document.getElementById("mainBody")
var mainBodyModal = document.getElementById("mainBodyModal")
var redBox = document.getElementById("redBox")
var nav = document.getElementById("nav")

function delayModal(){
	window.setTimeout(function (){
		mainBodyModal.classList.add("dimMainBody")
		redBox.classList.add("redBox")
		forumButton.classList.add("rotateForumButton")
		redBox.innerHTML = "<p>^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ <br>Click on the Forum button above to navigate to our forum section where you can join our growing community of open food activists!<br><br>Click anywhere on the window to go back to exploring the page.</p>"
		nav.setAttribute("style", "background-color:black; opacity:0.6;")
	}, 3000)
	window.setTimeout(function (){
		mainBodyModal.setAttribute("style", "background-color: black; opacity: 0.6;")
		}, 3000)
	window.setTimeout(function (){
		mainBodyModal.addEventListener("click", function clearModal(){
		mainBodyModal.classList.remove("dimMainBody")
		forumButton.classList.remove("rotateForumButton")
		redBox.classList.remove("redBox")
		redBox.innerHTML = ""
		nav.setAttribute("style", "background-color: lightgrey; opacity:1;")
		mainBodyModal.removeEventListener("click", clearModal)
	})
	}, 3000)
	
}

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
