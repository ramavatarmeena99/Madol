const openbutton = document.querySelector(".click")
const closebutton = document.querySelector(".button2")
const home = document.querySelector(".home")


window.addEventListener("DOMContentLoaded", function(){
  home.style.display = "none"
})

closebutton.addEventListener("click", function(){
        home.style.display = "none";
        openbutton.style.display = "block"
})
openbutton.addEventListener("click", function(){
  home.style.display = "block";
  openbutton.style.display = "none"
})