import { father, createElement, createAnchor } from "../../../functions/createElements.js";


function createHeader(){
    createElement(document.body, "HEADER", "header");
    createElement(father(".header"), "NAV", "nav__bar");
    createElement(father(".nav__bar"), "DIV", "nav__bar-container")
    createAnchor(father(".nav__bar"), "../../../index.html", "", "Quem somos nós")
    createAnchor(father(".nav__bar"), "#", "", "Vantagens do WorkUs")
    createAnchor(father(".nav__bar"), "#", "", "Contatos")
}

export default createHeader;