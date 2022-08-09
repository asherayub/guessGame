// ?    start game
const start = document.querySelector(".start-btn")
start.addEventListener("click", () => {
    document.querySelector(".start-game").style.display = "none"
    document.querySelector(".game-body").style.display = "block"

})

// ?    restart button
document.querySelector(".restart").addEventListener("click", () => {
    document.querySelector(".menu-ul").classList.remove("menu-ul-collapse")
    numberClicked.forEach((number) => {
        number.textContent = ""
        number.style.background = "#162938"
    })
})

// ?    menu toggle button
const menuToggle = document.querySelector(".menu")
menuToggle.addEventListener("click", () => {
    document.querySelector(".menu-ul").classList.toggle("menu-ul-collapse")
})



// ?    number clicked logic
const numberClicked = document.querySelectorAll('.number')
numberClicked.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (number.textContent == "") {
            number.textContent = randomNumber()
            number.style.background = "orangered"
            let numberClickOne = e.target.textContent
            console.log("click " + numberClickOne);    
        }
        if(number.textContent == number.textContent){
            console.log("won");
        }
    })
})


// ?    generates random number each time it is called
function randomNumber() {
    let randomDigit = Math.floor(Math.random() * 8 + 1)
    return randomDigit
}