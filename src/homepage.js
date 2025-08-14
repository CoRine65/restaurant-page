
//home page detail
export default function homePage() {
// grab the content div
const content = document.getElementById("content");

//create homepage elements
const headline = document.createElement("h2");
headline.textContent = "Welcome the Webpack Restaurant!";

const descpription = document.createElement("p");
descpription.textContent = "We server delicious food and provide a cozy atmosphere.";

//append the content div
content.appendChild(headline);
content.appendChild(descpription);
}