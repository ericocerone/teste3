/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

let speed = 7
let posX = 10

// GAME LOOP
function drawGame() {
    clearScreen()
    drawSnake()
    requestAnimationFrame(drawGame)
    //setTimeout(drawGame, 1000/speed)
}

function clearScreen() {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnake() {
    ctx.fillStyle = 'green'
    ctx.fillRect(posX, 10, 30, 30)
}

// KEYBOARD LISTENER
document.body.addEventListener('keydown', keyDown)
function keyDown(event) {
    // UP
    if (event.key == "ArrowUp") {
        posX += 10
    }
}

drawGame()