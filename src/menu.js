export function loadMenuPage(){
    const content = document.getElementById("content");
    const heading = document.createElement("h1");

    heading.textContent = "This is the Menu page";
    content.appendChild(heading);
}