console.log("Hello from Webpack!");

//importing from the homepage.js into here
import homePage from "./homepage";
import menuPage from "./menu";
import contactPage from "./contact";

// grab the main container
const content = document.getElementById("content");

//grab the buttons we created on the html
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

//utility function to clear and load each new page
function loadPage(pageFunction){
    content.innerHTML = ""; //clears previous content so it won't stack
    pageFunction();
}

//event Listeners for tab switching
homeBtn.addEventListener("click", () => {
 loadPage(homePage);
});
menuBtn.addEventListener("click", () => {
 loadPage(menuPage);
});
contactBtn.addEventListener("click", () => {
 loadPage(contactPage);
});

//default load
loadPage(homePage);
