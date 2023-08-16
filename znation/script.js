
let xIcon = document.getElementById("xIcon")
xIcon.addEventListener("click", function() {
  window.scrollTo({top:0, behavior:"smooth"})
})

let downArrow = document.getElementById("downArrow")
downArrow.addEventListener("click", function() {
  window.scrollTo({top:4000, behavior:"smooth"})
})


let menuIcon = document.getElementById("menuIcon");
let theMenu = document.getElementById("theMenu");
menuIcon.addEventListener("click", function() {
  if(menuIcon.classList.contains("menuRotate")) {
    menuIcon.classList.add("menuRotate2")
    menuIcon.classList.remove("menuRotate")

    theMenu.style.cssText = "transform: translateX(0em); display:none"
  } else {
    menuIcon.classList.add("menuRotate")
    menuIcon.classList.remove("menuRotate2")

    theMenu.style.cssText = "transform: translateX(4em); display:flex"
  }
})