import { father, createElement, createAnchor } from "../../../functions/createElements.js";
import createFirstSection from "./mainSections/firstSection.js";
import createSecondSection from "./mainSections/secondSection.js";
import createThirdSection from "./mainSections/thirdSection.js";


function createMain(){
    createElement(document.body, "MAIN", "container")
    createFirstSection()
    createSecondSection()
    createThirdSection()
}

export default createMain;