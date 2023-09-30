const buttonCatalog = document.getElementById("catalog")
const modalDisplay = document.getElementById("modal")

///--> Работа модального каталога <--///
if(buttonCatalog != undefined){
    if(modalDisplay != undefined){
        buttonCatalog.addEventListener("click", ()=>{
            if(getComputedStyle(modalDisplay).display == 'none')
                modalDisplay.style.display = "flex"
            else
                modalDisplay.style.display = "none"
        })
    }
    else{
        throw new Error("Exeption: Something wrong... Check animation.js #url: src/ui/animation.js")
    }
}
else{
    throw new Error("Exeption: Something wrong... Check animation.js #url: src/ui/animation.js")
}
///---> end <---///

///--> Работа с формой логинов и паролей <---///
const buttonLogin = document.getElementById("buttonLogin")
const closeButton = document.querySelector(".close")
const modalLogin = document.querySelector(".modal")
function openModal(){
    modalLogin.style.display = "block"
}
function closeModal(){
    modalLogin.style.display = "none"
}

if(buttonLogin != undefined && modalLogin != undefined && closeButton != undefined){
    buttonLogin.addEventListener("click", openModal)
    closeButton.addEventListener("click", closeModal)
}
else{
    throw new Error("Exeption: Something wrong... Please check code in Router.jsx")
}