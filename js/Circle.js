let points = 0;
let xPos;
let yPos;
let circleHeight;
let circleWidth;
let circleBack;
let circleBorder;

function circleClick() {
    points++;
    if (points < 1) {

    } else if (points >= 1 && points < 15) {
        alert(points);
    } else {
        alert("You win!");
        if (prompt("Would you like to play again?") == "yes") {
            points = 0;
            alert("Your points have been reset!");
        }
    }
}