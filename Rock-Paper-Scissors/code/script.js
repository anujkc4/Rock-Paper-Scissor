let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let myscore = document.querySelector("#score");
let compscore = document.querySelector("#cpscore");
let message = document.querySelector("#message");
let image = document.querySelectorAll("img");



let player1score = 0;
let player2score = 0;

let play = true;
if (play) {
    gameStrt();
}

function gameStrt() {
    image.forEach((img) => {
        img.addEventListener("click", function (e) {
            generateSign(e.target.id);
        });
    });
}

function generateSign(userinput) {
    let computerChoice = ["rock", "paper", "scissor"];
    let random = parseInt(Math.random() * 3);
    let updateval = computerChoice[random];

    if (computerChoice[random] == "rock") {
        checkRock(userinput, updateval);
    } else if (computerChoice[random] == "paper") {
        checkPaper(userinput, updateval);
    } else {
        checkScissor(userinput, updateval);
    }
}

function checkRock(userinput, updateval) {
    if (userinput == "paper") {
        updateWin(updateval); //win
    } else if (userinput == "scissor") {
        updateLost(updateval); //lost
    } else {
        updateDraw(updateval); //draw
    }
}

function checkPaper(userinput, updateval) {
    if (userinput == "scissor") {
        updateWin(updateval); //win
    } else if (userinput == "rock") {
        updateLost(updateval); //lost
    } else {
        updateDraw(updateval); //draw
    }
}

function checkScissor(userinput, updateval) {
    if (userinput == "rock") {
        updateWin(updateval); //win
    } else if (userinput == "paper") {
        updateLost(updateval); //lost
    } else {
        updateDraw(updateval); //draw
    }
}

function updateWin(updateval) {
    message.innerHTML = `WIN COMPUTER CHOOSE,${updateval.toUpperCase()}`;
    myscore.innerHTML = ++player1score;
    message.style.backgroundColor = "#38b000";
}
function updateLost(updateval) {
    message.innerHTML = `LOST COMPUTER CHOOSE,${updateval.toUpperCase()}`;
    compscore.innerHTML = ++player2score;
    message.style.backgroundColor = "#c32f27";

}
function updateDraw(updateval) {
    message.innerHTML = `DRAW,COMPUTER CHOOSE,${updateval.toUpperCase()}`;
    message.style.backgroundColor = "#aeb8fe";

}
