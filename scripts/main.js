AOS.init();

const themeChangeBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const navMenu = document.getElementById("nav-menu");
const burgerIcon = document.getElementById("burger-menu");
const closeMenuIcon = document.getElementById("closeMenuIcon");

let savedThemeChoice = localStorage.getItem("themeChoice");


// Check if a theme choice has been saved
if (savedThemeChoice !== null) {
    
  if (savedThemeChoice == "moon") {
    themeIcon.name == "moon"
    // console.log("smod")
    document.body.classList.add("light-mode");
  }
  else{
    document.body.classList.remove("light-mode");
    // themeIcon.name === "moon"
    // console.log("sad")
  }

}

themeChangeBtn.onclick = (e) => {
  // change the value of the name attr in the theme icon
  themeIcon.name === "sunny" ? themeIcon.name = "moon" : themeIcon.name = "sunny";
  document.body.classList.toggle("light-mode");
  localStorage.setItem("themeChoice", themeIcon.name);
  // console.log(themeIcon.name)
}


// open nav menu
burgerIcon.onclick=()=>{	
  navMenu.classList.add("showMenu");
}

// close nav menu
closeMenuIcon.onclick=()=>{
  navMenu.classList.remove("showMenu");
}