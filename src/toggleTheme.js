import { local } from ".";

const everything = document.querySelector(":root")
const main = document.querySelector(".main")
const card = document.querySelectorAll(".card")

function toggleTheme() {
    if(local.theme === "light"){
        local.theme = "dark"

        everything.style.color = "white";
        main.style.backgroundColor = "black"
        card.style.backgroundColor = "black"

    }
}

export{toggleTheme}