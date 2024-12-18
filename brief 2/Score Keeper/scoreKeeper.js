const playerOneBtn = document.getElementById("playerOneBtn");
const playerTwoBtn = document.getElementById("playerTwoBtn");
const resetBtn = document.getElementById("resetBtn");
const h1 = document.getElementsByTagName("h1")[0];
const entry = document.getElementsByTagName("input")[0];
const p = document.getElementsByTagName("p")[0];

let p1Score = 0;
let p2Score = 0;


playerOneBtn.onclick = updateP1;
playerTwoBtn.onclick = updateP2;
resetBtn.onclick = reset;

entry.addEventListener("change", updateMaxScore);

function updateMaxScore() {
    p.textContent = `Playing to : ${entry.value}`;
}

function updateP1() {
    if (p1Score >= entry.value) {
        h1.firstChild.style.color = "green";
        updateScore();
        return;
    }
    p1Score++;
    updateScore();
}

function updateP2() {
    if (p2Score >= entry.value) {
        h1.lastChild.style.color = "green";
        updateScore();
        return;
    }
    p2Score++;
    updateScore();
}

function updateScore() {

    h1.firstChild.textContent = `${p1Score}`
    h1.lastChild.textContent = `${p2Score}`;
}

function reset() {
    p1Score = 0;
    p2Score = 0;
    updateScore();
    changeColor([h1.firstChild, h1.lastChild], "black");
}

function changeColor(arr, color) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.color = color;
    }
}