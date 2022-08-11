const clapping = new Audio("/mixkit-small-group-clapping-475.wav")


// ?    start game
const start = document.querySelector(".start-btn")
start.addEventListener("click", () => {
    document.querySelector(".start-game").style.display = "none"
    document.querySelector(".game-body").style.display = "block"

})

// ?    restart button
document.querySelector(".restart").addEventListener("click", () => {
    //?     reset everything
    score = 0
    scoreSpanEl.textContent = "0"
    clickedBtnArray = []
    document.querySelector(".menu-ul").classList.remove("menu-ul-collapse")
    numberClicked.forEach((number) => {
        number.textContent = ""
        number.style.background = "#162938"
    })
})

// ?    exit button
document.querySelector(".exit").addEventListener("click", ()=>{
    window.close()
})

// ?    menu toggle button
const menuToggle = document.querySelector(".menu")
menuToggle.addEventListener("click", () => {
    document.querySelector(".menu-ul").classList.toggle("menu-ul-collapse")
    document.querySelector(".fa-arrow-down").classList.toggle("fa-arrow-up")
})


const scoreSpanEl = document.querySelector("#score-span")
let score = 0
// ?    number clicked logic
const numberClicked = document.querySelectorAll('.number')
let clickedBtnArray = []
scoreSpanEl.textContent = score
numberClicked.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (clickedBtnArray.length > 1) {
            clickedBtnArray = []
        }
        if (number.textContent == "") {
            number.textContent = randomNumber()
            number.style.background = "orangered"
            clickedBtnArray.push(e.target.textContent)
            if (clickedBtnArray.length == 2) {
                if (clickedBtnArray[clickedBtnArray.length - 2] == clickedBtnArray[clickedBtnArray.length - 1]) {
                    clapping.play()
                    score += 10
                }

            }
        }
        scoreSpanEl.textContent = score
    })
})


// ?    generates random number each time it is called
function randomNumber() {
    let randomDigit = Math.floor(Math.random() * 7 + 1)
    return randomDigit
}