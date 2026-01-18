import phoImage from './pho-recipe.jpg';
export function loadHomePage() { 
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    const pho_img = document.createElement("img");
    const description = document.createElement("h3");

    heading.textContent = "Hello this is my new page for my restaurant!!!";
    pho_img.src = phoImage;
    description.textContent = "We hope you enjoy";

    content.appendChild(heading);
    content.appendChild(description);
    content.appendChild(pho_img);
}