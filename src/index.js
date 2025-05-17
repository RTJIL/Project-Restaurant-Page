import "./style.css"
import { addHomeContent, clearHomeContent } from "./homeContent";

console.log("Hello There")
addHomeContent();

const buttons = document.querySelectorAll('button');
buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        if(btn.textContent.toUpperCase() === "HOME") {
            clearHomeContent();
            addHomeContent();
        } else if (btn.textContent.toUpperCase() === "MENU") {
            
        } else if (btn.textContent.toUpperCase() === "CONTACT") {
            
        } 
    } )
})