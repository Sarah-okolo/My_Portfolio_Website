const textChange = document.getElementById("text-change");
const docsTypeArr = ["User Guides", "Project Documentation", "How-To Guides", "Blog Posts / Articles", "API Documentation"];
const infoSection = document.getElementById("info");
const imgWrapper = document.querySelector(".img-wrapper");
  

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
