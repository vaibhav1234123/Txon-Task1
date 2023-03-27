const hamburger = document.querySelector(".hamb");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function() {
	hamburger.classList.toggle("click");
	navList.classList.toggle("open");
})