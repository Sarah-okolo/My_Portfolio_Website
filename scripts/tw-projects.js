const projectsContainer = document.getElementById("projects-container");
// const projectCard = document.querySelectorAll(".tw-project-card");
const seeDetailsOverlay = document.querySelectorAll(".see-details-overlay");
const closeDetailsOverlayBtn = document.querySelector(".close-details-overlay-btn");
const projectDetailsContainer = document.getElementById("project-details-container");
const detailsCard = document.getElementById("details-card");

// elements for sections in the project details card.
const challanges = document.getElementById("challanges");
const docToolsUsed = document.getElementById("doc-tools-used");
const whatILearned = document.getElementById("what-i-learned");




//fetch project details from json file and display on project card
const fetchProjectInfo = async () => {
  try {
    const res = await fetch('../technical-writer/TW_projects.json'); //fetch data from json file
    const data = await res.json(); // Await the JSON data

  
      data.forEach((project) => {
       // Create the main card container
        const projectCard = document.createElement('div');
        projectCard.className = 'card tw-project-card';

        // Create the preview image container
        const previewImage = document.createElement('div');
        previewImage.className = 'preview-image';

        // Create the image element
        const image = document.createElement('img');
        image.src = project.image_url;
        image.alt = project.image_alt;
        image.className = 'tw-project-previewimage';

        // Create the preview info container
        const previewInfo = document.createElement('div');
        previewInfo.className = 'preview-info';

        // Create the project name heading
        const projectName = document.createElement('h2');
        projectName.textContent = project.name;

        // Create the project description paragraph
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        // Create the see-details overlay container
        const seeDetailsOverlay = document.createElement('div');
        seeDetailsOverlay.className = 'see-details-overlay';

        // Create the see-details button
        const seeDetailsButton = document.createElement('button');
        seeDetailsButton.className = 'btns see-details-btn';
        seeDetailsButton.textContent = 'See Details';

        // Append elements to their respective containers
        previewImage.appendChild(image);
        previewInfo.appendChild(projectName);
        previewInfo.appendChild(projectDescription);
        seeDetailsOverlay.appendChild(seeDetailsButton);
        projectCard.appendChild(previewImage);
        projectCard.appendChild(previewInfo);
        projectCard.appendChild(seeDetailsOverlay);

        // Append the main card container to the projectsContainer
        projectsContainer.appendChild(projectCard);

        projectCard.addEventListener('mouseover', ()=>{seeDetailsOverlay.style.display = "grid"})
        projectCard.addEventListener('mouseout', ()=>{seeDetailsOverlay.style.display = "none"})
        seeDetailsButton.addEventListener('click', ()=>{
          projectDetailsContainer.style.display = "grid";

          // populate details container sections with project details
          challanges.innerHTML = project.details.challanges;
          whatILearned.innerHTML = project.details.what_i_learned;
          docToolsUsed.innerHTML= project.details.documentation_tools_used;

        })
        
      })
  }
  catch (error) {
    console.log(error)
  }
}
fetchProjectInfo();

// close details overlay for each project card
closeDetailsOverlayBtn.onclick = () => {
  projectDetailsContainer.style.display = "none";
}