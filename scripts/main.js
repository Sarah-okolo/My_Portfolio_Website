AOS.init();

const themeChangeBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const navMenu = document.getElementById("nav-menu");
const burgerIcon = document.getElementById("burger-menu");
const closeMenuIcon = document.getElementById("closeMenuIcon");

let themeSwitch = '0'; // 0 - dark, 1 - light

let savedThemeChoice = localStorage.getItem("themeChoice");

// Check if a theme choice has been saved
if (savedThemeChoice !== null) {
  if (savedThemeChoice == '0') {
    themeIcon.name = "sunny";
    document.body.classList.remove("light-mode");
  }
  else if(savedThemeChoice == '1') {
    console.log("is it 1")
    themeIcon.name = "moon";
    document.body.classList.add("light-mode");
  }
}

if (savedThemeChoice == '1') {
  themeSwitch = '1'
}
themeChangeBtn.onclick = (e) => {
  // Toggle theme and update the name attribute of themeIcon
  themeIcon.name = themeIcon.name == "sunny" ? "moon" : "sunny";
  // console.log(themeIcon.name)
 document.body.classList.toggle("light-mode");
 
  if(themeSwitch == '0') {
    themeSwitch = '1';
    console.log("enters 1")
  }
  else if(themeSwitch == '1') {
    themeSwitch = '0';
    console.log("became 0")
  }

  localStorage.setItem("themeChoice", themeSwitch);
  console.log(localStorage.getItem("themeChoice"));

};



// open nav menu
burgerIcon.onclick=()=>{	
  navMenu.classList.add("showMenu");
}

// close nav menu
closeMenuIcon.onclick=()=>{
  navMenu.classList.remove("showMenu");
}