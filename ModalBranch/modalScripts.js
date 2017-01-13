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


function delayModal(){
	window.setTimeout(startModal(mainBodyModal, forumButton), 3000)
	window.setTimeout(startModal(document.getElementById("mainBodyModal").setAttribute("style", "background-color: black; opacity: 0.4;"), 3000))
}

function startModal(x,y){
	x.classList.add("dimMainBody")
	y.classList.add("rotateForumButton")
}

