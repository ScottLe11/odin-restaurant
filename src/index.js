
import { loadHomePage } from './initial-page-load.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';
console.log("Works!!")


const content = document.getElementById("content");

function clearContent(){
    content.innerHTML = "";
}

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

loadHomePage();

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHomePage(); 
});

menuBtn.addEventListener("click", () => {
    clearContent();
    console.log("Menu button clicked!");
    loadMenuPage(); 
});

contactBtn.addEventListener("click", () => {
    clearContent();
    loadContactPage(); 
});

//loadHomePage();

