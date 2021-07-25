const colorCodes = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let hexNum = "#";
let points = 0;
let timeTaken;

let start = new Date().getTime();

function makeShapeAppear() {
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = Math.random() * 400;
    let height = Math.random() * 400;
    document.getElementById("generated-shape").style.width = width + "px";
    document.getElementById("generated-shape").style.height = height + "px";
    document.getElementById("generated-shape").style.top = top + "px";
    document.getElementById("generated-shape").style.left = left + "px";
    document.getElementById("generated-shape").style.display = "block";
    for (let i = 0; i < 6; i++) {
        hexNum += colorCodes[Math.floor(Math.random() * colorCodes.length)];
    }
    document.getElementById("generated-shape").style.backgroundColor = hexNum;
    hexNum = "#";
    start = new Date().getTime();
}

function delayAppearance() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

delayAppearance();

window.onload = function() {
    document.getElementById("generated-shape").onclick = function() {
        document.getElementById("generated-shape").style.display = "none";
        let end = new Date().getTime();
        timeTaken = (end - start) / 1000;
        points++;
        if (points >= 15) {
            console.log("You win!");
        }
        if (points <= 0) {
            console.log("Too slow. You lose!");
        }
        if (timeTaken > 2) {
            points--;
        }
        document.getElementById("myPoints").innerHTML = "Points: " + points;
        document.getElementById("myTime").innerHTML = "Time Elapsed: " + timeTaken;
        delayAppearance();
    }
}