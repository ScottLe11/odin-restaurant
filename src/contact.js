export function loadContactPage(){
    const content = document.getElementById("content");
    const heading = document.createElement("h1");

    heading.textContent = "This is the Contact page";
    content.appendChild(heading);
}