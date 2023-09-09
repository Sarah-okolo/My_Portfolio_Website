AOS.init();

const themeChangeBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const navMenu = document.getElementById("nav-menu");
const burgerIcon = document.getElementById("burger-menu");
const closeMenuIcon = document.getElementById("closeMenuIcon");
const textChange = document.getElementById("text-change");
const docsTypeArr = ["User Guides", "Project Documentation", "How-To Guides", "Blog Posts / Articles", "API Documentation"];
const infoSection = document.getElementById("info");
const imgWrapper = document.querySelector(".img-wrapper");
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

  console.log(themeIcon.name)
}



// nav menu
burgerIcon.onclick=()=>{	
navMenu.classList.add("showMenu");
}

// close nav menu
closeMenuIcon.onclick=()=>{
  navMenu.classList.remove("showMenu");
}


let counter = 0;
// changes the text of an element dynamically
let changeText = () => {
  if (counter < docsTypeArr.length){
    textChange.innerText = docsTypeArr[counter]; // change text content to items in array.
    counter++;
  }
  else{
    counter = 0;
  }
}
setInterval(changeText, 4000);
