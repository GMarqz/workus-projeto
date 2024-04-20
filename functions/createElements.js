function father(elementFather){
    return document.querySelector(elementFather)
}

function createElement(elementFather, elementType, cssClassName, text){
    const createElement = document.createElement(elementType)
    elementFather.appendChild(createElement)
    createElement.className = cssClassName
    createElement.textContent = text
}  

function  createAnchor(elementFather, href, cssClassName, text){
    const createAnchor = document.createElement("A")
    elementFather.appendChild(createAnchor)
    createAnchor.href = href
    createAnchor.className = cssClassName
    createAnchor.textContent = text
}

export { father, createElement, createAnchor };