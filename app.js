let circleTochange
// colour array
colorsArray = ["red", "yellow", "blue", "purple", "green", "orange"]

const hiddenCol = document.querySelector("#coded-column")
console.log(hiddenCol)
hiddenCol.style.visibility = "hidden"

const showBt = document.getElementById("show-button")
showBt.addEventListener("click", toggleChoices)
console.log(showBt)

const circles = document.querySelectorAll(".circle")
console.log(circles)

const dropdown = document.getElementById('dropdown');


function toggleChoices() {
    console.log(hiddenCol.style)

    if (hiddenCol.style.visibility === "visible")
        hiddenCol.style.visibility = "hidden"
    else
        hiddenCol.style.visibility = "visible"
}

function initialize() {
    circles[0].style.backgroundColor = colorsArray[Math.floor((Math.random()*6))]
    circles[1].style.backgroundColor = colorsArray[Math.floor((Math.random()*6))]
    circles[2].style.backgroundColor = colorsArray[Math.floor((Math.random()*6))]
    circles[3].style.backgroundColor = colorsArray[Math.floor((Math.random()*6))]

}


// function chooseColor(){

// }
// circles.forEach((e) => {
//     // e.style.backgroundColor = colorsArray[0]
//     e.addEventListener("click", chooseColor)
// })



circles.forEach((e) => {
    e.addEventListener("click", toggleDropDown)
})


function toggleDropDown(event) {
    const { clientX: x, clientY: y } = event;
    // console.log({ clientX: x, clientY: y })
    // console.log(`${x}px`)
    // console.log(`${y}px`)
    if(event.target.style.backgroundColor == ""){
        circleTochange= event.target.id
        console.log(event.target)
        console.log(circleTochange)
        console.log(circles)
        dropdown.style.display = 'block';
        dropdown.style.left = `${x}px`;
        dropdown.style.top = `${y}px`;
    }
}

//hide dropdown list if clicked outside circles ++ change color
document.addEventListener('click', (event) => {
    if (event.target.className == "color-list") {
        // console.log(event.target.textContent)
        // console.log(circles[circleTochange].style.backgroundColor)
        circles[circleTochange].style.backgroundColor = event.target.textContent 
        // console.log(circles[circleTochange].style.backgroundColor)

        dropdown.style.display = 'none';      
    }
    else if (event.target.className !== "circle") {
        // console.log(event.target.className)
        dropdown.style.display = 'none';
    }
})

initialize()