"use strict";
const url = window.location.href;
const strActual = url.split("/");
const elements = [
    {
        name: "dashboard.html",
        id: "#inicio",
    },
    {
        name: "upload.html",
        id: "#upload",
    },
    {
        name: "files.html",
        id: "#files",
    },
    {
        name: "server.html",
        id: "#server",
    },
    {
        name: "utilities.html",
        id: "#utilities",
    },
];
const actual = strActual[strActual.length - 1];

for (let el in elements) {
    if (actual === elements[el].name) {
        //console.log(elements[el].id)
        const link = document.querySelector(elements[el].id);
        link.classList.add("actual");
        //console.log(link)
    }
}