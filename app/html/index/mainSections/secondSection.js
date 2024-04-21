import { father, createElement, createAnchor } from "../../../../functions/createElements.js";

function createSecondSection(){
    createElement(father(".container"), "SECTION", "container__second__section")
    createElement(father(".container__second__section"), "DIV", "container__second__section-background")
    createElement(father(".container__second__section"), "DIV", "container__second__section__div")
    createElement(father(".container__second__section__div"), "DIV", "container__second__section__div-div")
    createElement(father(".container__second__section__div-div"), "H2", "container__second__section__div-header", "Trabalho organizado é trabalho otimizado")
    createElement(father(".container__second__section__div"), "P", "container__second__section__div-content")
    const paragraph = document.querySelector(".container__second__section__div-content")
    paragraph.innerHTML = "A nova jornada de trabalho exige novos hábitos e um controle melhor na disciplina de horários e demandas. <br> Com a gente você cria, gerencia e executa todo o seu fluxo de trabalho junto ao de toda a sua equipe, principalmente em home office.";
}

export default createSecondSection;