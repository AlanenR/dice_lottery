var dice1 = randomNumber();
var dice2 = randomNumber();



// Returns a random number between 1 and 6
function randomNumber(){
    var number;
    number = Math.floor(Math.random() * 6 + 1);

    return number;
}


function whoWins(){
    setDiceImg();
    setH1();
}

// Set a new source image according to the dice1/dice2 value
function setDiceImg() {
    var diceImg1 = getDiceImg(1);   // Get the current  img src attribute for img1
    var diceImg2 = getDiceImg(2);   // Get the current  img src attribute for img2

    diceImg1 = "images/dice" + dice1 + ".png";  // Change the src image path matching the random number generated in the beginning for img1
    diceImg2 = "images/dice" + dice2 + ".png";  // Change the src image path matching the random number generated in the beginning for img2

    document.getElementById("img1").src = diceImg1;
    document.getElementById("img2").src = diceImg2;
}


// Gets the source attribute from the dice image
function getDiceImg(imagenumber){
    var diceSrc;
    diceSrc = document.getElementsByClassName("img" + imagenumber)[0].getAttribute("src");

    return diceSrc;
}

function setH1(){
    if(dice1 === dice2) {
        document.querySelector("h1").textContent = "It's a draw";

    }
    else if(dice1 > dice2) {
        document.querySelector("h1").textContent = "🚩 Player 1 wins!";
    }
    else if(dice1 < dice2) {
        document.querySelector("h1").textContent = "Player 2 wins! 🚩";

    }
}




whoWins();

