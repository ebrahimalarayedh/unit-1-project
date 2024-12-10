const hiddenCol= document.querySelector("#coded-column")
console.log(hiddenCol)
hiddenCol.style.visibility= "hidden"

const showBt= document.getElementById("show-button")
showBt.addEventListener("click", toggleChoices)
console.log(showBt)


function toggleChoices(){
    console.log(hiddenCol.style)

    if(hiddenCol.style.visibility==="visible")
        hiddenCol.style.visibility= "hidden"
    else
    hiddenCol.style.visibility= "visible"
}