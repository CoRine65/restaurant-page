//exporting the menu function

export default function menuPage() {
    //grab the main content container
    const content = document.getElementById("content");

    //div to hold to the menu items
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    //create a heading
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    //menu items 
    const item1 = document.createElement("div");
    item1.textContent = "Margherita Pizza: $10";

    const item2 = document.createElement("div");
    item2.textContent = "Classic Cheeseburger: $8";

    //appending to MENU CONTAINER
    menuContainer.appendChild(heading);
    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);

    //appending to the main container
    content.appendChild(menuContainer);
}