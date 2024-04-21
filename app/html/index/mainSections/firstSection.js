import { father, createElement, createAnchor } from "../../../../functions/createElements.js";

function createFirstSection(){
    createElement(father(".container"), "SECTION", "container__first__section")
    createElement(father(".container__first__section"), "DIV", "container__first__section__div")
    createElement(father(".container__first__section__div"), "H1", "container__first__section__div-header", "Crie e gerencie seu fluxo de trabalho no Home Office com o WorkUs")
    createElement(father(".container__first__section__div"), "DIV", "container__first__section__div-button")
    createAnchor(father(".container__first__section__div-button"), "#", "container__first__section__div-button-content", "Crie sua conta grátis")
    createElement(father(".container__first__section"), "DIV", "container__first__section-background")
}

export default createFirstSection;