import { fetchData } from "./fetch.js";


const app = document.getElementById("app")

const header = document.createElement("header")

const h1 = document.createElement("h1");
h1.textContent = "My Dog"

const logo = document.createElement("img")
logo.className = "headerLogo"
logo.src = "./src/assets/icons/paw.png"

const main = document.createElement("main");

const section = document.createElement("section")

const data = await fetchData();
const img = document.createElement("img")
img.src = data.message;



header.append(logo, h1)
main.append(section)
section.append(img)
app.append(header, main)