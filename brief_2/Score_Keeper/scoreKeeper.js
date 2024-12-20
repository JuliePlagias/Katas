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
    reset();
    p.textContent = `Playing to : ${entry.value}`;
}

function updateP1() {
    updateScore(1, 0);
}

function updateP2() {
    updateScore(0, 1);
}

function updateScore(p1, p2) {

    if (p1Score >= entry.value || p2Score >= entry.value) return;
    p1Score += p1;
    if (p1Score >= entry.value) {
        h1.firstChild.style.color = "green";
    }
    p2Score += p2;
    if (p2Score >= entry.value) {
        h1.lastChild.style.color = "green";
    }

    h1.firstChild.textContent = `${p1Score}`
    h1.lastChild.textContent = `${p2Score}`;
}

function reset() {
    p1Score = 0;
    p2Score = 0;
    h1.firstChild.textContent = `${p1Score}`
    h1.lastChild.textContent = `${p2Score}`;
    changeColor([h1.firstChild, h1.lastChild], "black");
}

function changeColor(arr, color) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.color = color;
    }
}