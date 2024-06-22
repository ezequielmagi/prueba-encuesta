const pages = document.querySelectorAll('section')

console.log(pages)

let lives = 3



const userLives = document.getElementById('userLives')

userLives.innerHTML=`Te quedan ${lives} intentos`

const start = document.getElementById('start')
start.addEventListener('click', ()=>{
    lives = lives - 1
    userLives.innerHTML=`Te quedan ${lives} intentos`
    if(lives === 0){
        alert('Ya no quedan mas intentos!')
        return
    }
    if(lives > 0){
        pages[0].classList.add('hide')
        pages[1].classList.remove('hide')
    }
})