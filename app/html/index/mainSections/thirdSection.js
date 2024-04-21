import { father, createElement, createAnchor } from "../../../../functions/createElements.js";

function createThirdSection(){
    createElement(father(".container"), "SECTION", "container__third__section")
    createElement(father(".container__third__section"), "DIV", "container__third__section__div-background")
    createElement(father(".container__third__section"), "DIV", "container__third__section__div")
    createElement(father(".container__third__section__div"), "DIV", "container__third__section__div-div")
    createElement(father(".container__third__section__div-div"), "H2", "container__third__section__div-heading")
    const thirdSectionHeading = document.querySelector(".container__third__section__div-heading")
    thirdSectionHeading.innerHTML = "O que<span> é o Wo</span>rkUs?";
    createElement(father(".container__third__section__div-div"), "DIV", "container__third__section__div__div-span")
    createElement(father(".container__third__section__div__div-span"), "SPAN")
    createElement(father(".container__third__section__div"), "P", "container__third__section__div-content", "Somos uma plataforma 100% online de gerenciamento de demandas, gestão de fluxo de trabalho, processos e tempo. Não precisa mais marcar uma reunião que poderia ser um email com a sua equipe. Basta subir uma demanda, linkar aos responsáveis e colocar o prazo de entrega. Depois é só dar o feedback na plataforma mesmo. Simples, né? Nós queremos simplificar a sua rotina de home office!")
    createElement(father(".container__third__section__div"), "DIV", "div__container__third__section__div-button")
    createAnchor(father(".div__container__third__section__div-button"), "#", "container__third__section__div-button", "Faça uma demonstração grátis")
    createElement(father(".container__third__section__div"), "P", "container__third__section__div-content", "Com todas as funcionalidades da conta ativa")
    createElement(father(".container__third__section"), "DIV", "container__third__section__div-background")
}

export default createThirdSection;