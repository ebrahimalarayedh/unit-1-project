let circleTochange
// colour array
const colorsArray = ["red", "yellow", "blue", "purple", "green", "orange"]
let colCounter

const hiddenCol = document.querySelector("#coded-column")
console.log(hiddenCol)
hiddenCol.style.visibility = "hidden"

const showBt = document.getElementById("show-button")
showBt.addEventListener("click", toggleChoices)
console.log(showBt)

const circles = document.querySelectorAll(".circle")
console.log(circles)

const dropdown = document.getElementById('dropdown')

const message = document.getElementById('message')

const resetBtn = document.getElementById("reset-button")
resetBtn.addEventListener("click", reset)

const indicators = document.querySelectorAll(".icircle")
console.log(indicators)



function toggleChoices() {
    console.log(hiddenCol.style)

    if (hiddenCol.style.visibility === "visible")
        hiddenCol.style.visibility = "hidden"
    else
        hiddenCol.style.visibility = "visible"
}

function initialize() {
    colCounter = 4
    circles[0].style.backgroundColor = colorsArray[Math.floor((Math.random() * 6))]
    circles[1].style.backgroundColor = colorsArray[Math.floor((Math.random() * 6))]
    circles[2].style.backgroundColor = colorsArray[Math.floor((Math.random() * 6))]
    circles[3].style.backgroundColor = colorsArray[Math.floor((Math.random() * 6))]

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
    if (event.target.style.backgroundColor == "" && event.target.id >= colCounter && event.target.id <= colCounter + 3) {
        circleTochange = event.target.id
        // console.log(event.target)
        // console.log(circleTochange)
        // console.log(circles)
        dropdown.style.display = 'block';
        dropdown.style.left = `${x}px`;
        dropdown.style.top = `${y}px`;
    }
    else {
        // console.log(event.target.className)
        dropdown.style.display = 'none';
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
        if (circles[colCounter].style.backgroundColor !== "" && circles[colCounter + 1].style.backgroundColor !== ""
            && circles[colCounter + 2].style.backgroundColor !== "" && circles[colCounter + 3].style.backgroundColor !== ""
        ) {
            // console.log(circles[colCounter].style.backgroundColor)
            // console.log(circles[colCounter + 1].style.backgroundColor)
            // console.log(circles[colCounter + 2].style.backgroundColor)
            // console.log(circles[colCounter + 3].style.backgroundColor)
            // console.log("line")
            // console.log(circles[0].style.backgroundColor)
            // console.log(circles[1].style.backgroundColor)
            // console.log(circles[2].style.backgroundColor)
            // console.log(circles[3].style.backgroundColor)
            winnigCheck()
        }

    }
    else if (event.target.className !== "circle") {
        // console.log(event.target.className)
        dropdown.style.display = 'none';
    }
})

function changeIndicators() {

    //first row
    if (circles[colCounter].style.backgroundColor === circles[0].style.backgroundColor)
        indicators[colCounter].style.backgroundColor = "green"
    else if (circles[colCounter].style.backgroundColor === circles[1].style.backgroundColor ||
        circles[colCounter].style.backgroundColor === circles[2].style.backgroundColor ||
        circles[colCounter].style.backgroundColor === circles[3].style.backgroundColor
    )
        indicators[colCounter].style.backgroundColor = "orange"
    else
        indicators[colCounter].style.backgroundColor = "red"

    //second row
    if (circles[colCounter + 1].style.backgroundColor === circles[1].style.backgroundColor)
        indicators[colCounter + 1].style.backgroundColor = "green"
    else if (circles[colCounter + 1].style.backgroundColor === circles[0].style.backgroundColor ||
        circles[colCounter + 1].style.backgroundColor === circles[2].style.backgroundColor ||
        circles[colCounter + 1].style.backgroundColor === circles[3].style.backgroundColor
    )
        indicators[colCounter + 1].style.backgroundColor = "orange"
    else
        indicators[colCounter + 1].style.backgroundColor = "red"

    //third row
    if (circles[colCounter + 2].style.backgroundColor === circles[2].style.backgroundColor)
        indicators[colCounter + 2].style.backgroundColor = "green"
    else if (circles[colCounter + 2].style.backgroundColor === circles[0].style.backgroundColor ||
        circles[colCounter + 2].style.backgroundColor === circles[1].style.backgroundColor ||
        circles[colCounter + 2].style.backgroundColor === circles[3].style.backgroundColor
    )
        indicators[colCounter + 2].style.backgroundColor = "orange"
    else
        indicators[colCounter + 2].style.backgroundColor = "red"

    //forth row
    if (circles[colCounter + 3].style.backgroundColor === circles[3].style.backgroundColor)
        indicators[colCounter + 3].style.backgroundColor = "green"
    else if (circles[colCounter + 3].style.backgroundColor === circles[0].style.backgroundColor ||
        circles[colCounter + 3].style.backgroundColor === circles[1].style.backgroundColor ||
        circles[colCounter + 3].style.backgroundColor === circles[2].style.backgroundColor
    )
        indicators[colCounter + 3].style.backgroundColor = "orange"
    else
        indicators[colCounter + 3].style.backgroundColor = "red"



}

function winnigCheck() {
    if (circles[colCounter].style.backgroundColor === circles[0].style.backgroundColor &&
        circles[colCounter + 1].style.backgroundColor === circles[1].style.backgroundColor &&
        circles[colCounter + 2].style.backgroundColor === circles[2].style.backgroundColor &&
        circles[colCounter + 3].style.backgroundColor === circles[3].style.backgroundColor
    ) {
        message.textContent = "Congratulation! You have won!!"
        message.style.visibility = "visible"
        changeIndicators()
        colCounter = 41
    }
    else {
        changeIndicators()

        colCounter += 4
    }
    if (colCounter == 40) {
        changeIndicators()
        message.textContent = "Gameover"
        message.style.visibility = "visible"
    }
}

function reset() {
    message.textContent = ""
    message.style.visibility = "hidden"
    hiddenCol.style.visibility = "hidden"
    circles.forEach((e) => {
        e.style.backgroundColor = ""
    })
    indicators.forEach((e) => {
        e.style.backgroundColor = ""
    })
    initialize()
}


initialize()
// console.log(circles[0].style.backgroundColor)
// console.log(circles[1].style.backgroundColor)
// console.log(circles[2].style.backgroundColor)
// console.log(circles[3].style.backgroundColor)


