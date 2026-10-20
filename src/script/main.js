import { fetchData } from "./fetch.js";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
    console.log("App: service worker registered")
}


const app = document.getElementById("app")

const header = document.createElement("header")

const h1 = document.createElement("h1");
h1.textContent = "Dogs"

const logo = document.createElement("img")
logo.className = "headerLogo"
logo.src = "./src/assets/icons/paw.png"
logo.alt = "my Logo"

const main = document.createElement("main");

const section = document.createElement("section")

const data = await fetchData();
if (data?.message) {
    const img = document.createElement("img")
    img.src = data.message;
    img.alt = "dog Image"
    section.append(img)
} else {
    const message = document.createElement("p")
    message.textContent = "You're offline. The dog image is unavailable."
    section.append(message)
}

header.append(logo, h1)
main.append(section)
app.append(header, main)
