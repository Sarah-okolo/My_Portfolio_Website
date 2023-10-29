AOS.init();

const blogPostCardsContainer = document.getElementById("blog-post-cards-container");
const seeDetailsOverlay = document.querySelectorAll(".see-details-overlay");
const homeBlog = document.getElementById("home-blog");
const externalBlog = document.getElementById("external-blog");
const blogTypeInfo = document.getElementById("blog-type-info");
const errorContainer = document.querySelector(".error-container");
let tag;
let post_location;



//fetch post details from json file and display on post card
const fetchBlogPostsInfo = async () => {
  try {
    const res = await fetch('../blog-posts.json'); //fetch post previews from json file
    const data = await res.json(); // Await the JSON data
  
      data.forEach((post) => {
       // Create the post card
        const postCard = document.createElement('div');
        postCard.className = 'card tw-post-card';
        postCard.setAttribute("data-aos", "fade-up")

        // Create the preview image container
        const previewImage = document.createElement('div');
        previewImage.className = 'preview-image';

        // Create the image element
        const image = document.createElement('img');
        image.src = post.cover_image;
        image.alt = 'post cover image';

        // Create the preview info container
        const previewInfo = document.createElement('div');
        previewInfo.className = 'preview-info';

        // Create the post name heading
        const postName = document.createElement('h2');
        postName.className = 'title';
        postName.textContent = post.name;

        // Create the date and tag container
        const dateAndTag = document.createElement('div');
        dateAndTag.className = 'date-and-tag';

        const datePosted = document.createElement('span');
        datePosted.className = 'date-posted';
        datePosted.textContent = post.date_posted;

        tag = document.createElement('span');
        tag.className = 'tag'; 
        tag.textContent = post.location;


        
        // Sets the background color for the tag
        if (post.location == "External"){
          tag.classList.add("green");
        }
        else{
          tag.classList.add("brown");
        }


        // Create the see-details overlay container
        const seeDetailsOverlay = document.createElement('div');
        seeDetailsOverlay.className = 'see-details-overlay';

        // Create the see-details button
        const seeDetailsButton = document.createElement('a');
        seeDetailsButton.href = post.link;
        seeDetailsButton.className = 'btns post-link';
        seeDetailsButton.textContent = 'Read Me';

        // Append elements to their respective containers
        previewImage.appendChild(image);

        dateAndTag.appendChild(datePosted);
        dateAndTag.appendChild(tag);

        seeDetailsOverlay.appendChild(seeDetailsButton);

        previewInfo.appendChild(postName);
        previewInfo.appendChild(dateAndTag);

        // create card
        postCard.appendChild(previewImage);
        postCard.appendChild(previewInfo);
        postCard.appendChild(seeDetailsOverlay);

        // Append the blog post cards container to the blogPostCardsContainer
        blogPostCardsContainer.appendChild(postCard);


        // set visibility state for the read me button overlay on hover in-out of each card
        postCard.addEventListener('mouseover', ()=>{seeDetailsOverlay.style.display = "grid"})
        postCard.addEventListener('mouseout', ()=>{seeDetailsOverlay.style.display = "none"})

        // console.log(postCard.children[1].children[1].children[1].textContent)
        let howMany = 0;

        if (postCard.children[1].children[1].children[1].textContent == "Home"){
          howMany += 1;
          console.log(howMany);
          postCard.style.display="none"
        }
      })
  }
  catch (error) {
    errorContainer.style.display="grid";
      console.log(error);
}
}
fetchBlogPostsInfo();


// displays the blogtypeinfo element and hides it if other parts of the page are clicked
document.body.onclick = (e) => {
  if (e.target.id=="home-blog" || e.target.id=="external-blog"){
    blogTypeInfo.style.display="block";
  }
  else{
    blogTypeInfo.style.display="none";
  }
}



homeBlog.onclick = () => {
  blogTypeInfo.innerHTML="These are articles posted on my personal blog page on Dev.to";
}
externalBlog.onclick = () => {
  blogTypeInfo.innerHTML=" These are articles I've written for external publications";
}