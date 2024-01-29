// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const homeClick = document.querySelector(".home-click");
const homeLinks = document.querySelector(".home-links");
const aboutClick = document.querySelector(".about-click");
const aboutLinks = document.querySelector(".about-links");
const projectClick = document.querySelector(".project-click");
const projectLinks = document.querySelector(".project-links");

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
   // console.log(links.classList.contains("random"));
   // console.log(links.classList.contains("links"));

   /*if(links.classList.contains("show-links")){
    links.classList.remove("show-links");
   }
   else{
    links.classList.add("show-links");
   }*/
   links.classList.toggle("show-links");
});

homeClick.addEventListener('click', function(){              //home dropdown
    homeLinks.classList.toggle("home-show-link");
});

aboutClick.addEventListener('click', function(){          // about dropdown
    aboutLinks.classList.toggle("about-show-link");
});

projectClick.addEventListener('click', function(){             //project dropdown
    projectLinks.classList.toggle("project-show-link");
});