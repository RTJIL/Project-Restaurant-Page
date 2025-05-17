import "./style.css"
import { addHomeContent, clearContent } from "./homeContent"
import { addMenuContent } from "./menuContent"
import { addContactContent } from "./contactContent"

console.log("Hello There")
addHomeContent()

const buttons = document.querySelectorAll("button")
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.textContent.toUpperCase() === "HOME") {
      clearContent()
      addHomeContent()
    } else if (btn.textContent.toUpperCase() === "MENU") {
      clearContent()
      addMenuContent()
    } else if (btn.textContent.toUpperCase() === "CONTACT") {
      clearContent()
      addContactContent()
    }
  })
})
