
//module for contacts
export  default function contactPage () {
    //grab the main content container
    const content = document.getElementById("content");

    //create a div to hold our contact info
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    //create a heading
    const heading = document.createElement("h1");
    heading.textContent = "Contact Page";

    //creating contacts
    const phoneNumber = document.createElement("div");
    phoneNumber.textContent = "123-456-7890";

    const email = document.createElement("div");
    email.textContent = "webpackRestaurant@email.com";

    //append to contact div
    contactContainer.appendChild(heading);
    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(email);

    //append to main content
    content.appendChild(contactContainer);

}