const start = document.querySelector(".start-btn")
start.addEventListener("click", () => {
    document.querySelector(".start-game").style.display = "none"
    document.querySelector(".game-body").style.display = "block"

})


document.querySelector(".restart").addEventListener("click", () => {
    document.querySelector(".menu-ul").classList.remove("menu-ul-collapse")
    numberClicked.forEach((number) => {
        number.textContent = ""
        number.style.background = "#162938"
    })
})


const menuToggle = document.querySelector(".menu")
menuToggle.addEventListener("click", () => {
    document.querySelector(".menu-ul").classList.toggle("menu-ul-collapse")
})




const numberClicked = document.querySelectorAll('.number')
numberClicked.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (number.textContent == "") {
            number.textContent = randomNumber()
            number.style.background = "orangered"
        }
        console.log(e.target.textContent);
    })
})


function randomNumber() {
    let randomDigit = Math.floor(Math.random() * 5 + 1)
    return randomDigit
}