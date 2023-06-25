
let scoreLabel = document.querySelector(".score_label");
let highscoreLabel = document.querySelector('.highScore_Label');
let ModalWindow = document.querySelector('.perfect');
let secretNumber = Math.trunc((Math.random() * 20) + 1)
let score = 20;
let highScore = 0;
console.log(secretNumber, typeof secretNumber);

function displayMessage(Msg) { return document.querySelector("#first").textContent = Msg; }
function Coloring(id, c) { document.querySelector(id).style.color = c; }

const reset = function () {
    highscoreLabel.textContent = score;
    document.querySelector(".in").value = '';
    score = 20;
    secretNumber = Math.trunc((Math.random() * 20) + 1)
    console.log(secretNumber);
    document.querySelector('#questionMark').textContent = '?'
    document.querySelector('body').style.backgroundColor = ("#000");
    displayMessage("start Guessing");
    Coloring('#first', '#fff')
    Coloring('#second', '#fff')
    Coloring('#third', '#fff')
    Coloring("#Number_statement", '#FFF')
    scoreLabel.textContent = 20;
    document.querySelector("#Number_statement").textContent = "Enter number bwtween 1-20 "

    document.querySelector('.perfect').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');

}
const buttonClick = function () {
    const getNum = Number(document.querySelector('.in').value);
    if (getNum <= 20 && getNum >= 0) {
        if (getNum === 0) { alert(("Please enter number ::")); }
        else if (getNum === secretNumber) {
            document.querySelector("body").style.backgroundColor = "#8cff80";
            highscoreLabel.textContent = score;
            Coloring('#first', '#000');
            Coloring('#second', '#000');
            Coloring('#third', '#000');
            Coloring('#Number_statement', 'red')
            document.querySelector("#Number_statement").textContent = "Click on Again Button";
            document.querySelector('.secretBox').style.width = '20%'
            document.querySelector("#questionMark").textContent = getNum;
            ModalWindow.classList.remove('hidden');
            document.querySelector('.overlay').classList.remove('hidden');
            document.querySelector('.HSM').textContent = 'HighScore :' + score;
        }
        else if (getNum > secretNumber) {
            score--;
            if (score == 0) { alert("Try Again") }
            displayMessage('Too High')
            scoreLabel.textContent = score;
        }
        else if (getNum < secretNumber) {
            score--;
            if (score == 0) { alert("Try Again") }
            displayMessage("Too Low");
            scoreLabel.textContent = score;
        }
        else if (score == 0) { alert("Try Again!!!") }

    }
    else {

        alert("Enter between (1-20)")
    }
}
document.querySelector('.check').addEventListener('click', buttonClick);
document.querySelector('.reset').addEventListener('click', reset);

document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.ctrlKey && e.key == 'R' || e.key == 'r') {

        reset();
    }

})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') buttonClick();
})