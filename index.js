var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏁 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏴";
}
else {
  document.querySelector("h1").innerHTML = "Draw 🤝";
}





// var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
// var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

// // Kazanını yazmak için 

// if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML=" 🏁 Player 1 Wins";
// }
// else if (randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML=" Player 2 Wins 🏴";
// }
// else {
//     document.querySelector("h1").innerHTML=" Draw 🤝";
// }

// // randomNumber1 için img set etme

// if (randomNumber1 === 1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
//     }
// if (randomNumber1 === 2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
//     }
// if (randomNumber1 === 3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
//     }
// if (randomNumber1 === 4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
//     }
// if (randomNumber1 === 5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
//     }
// if (randomNumber1 === 6){
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
//     }

// // randomNumber2 için img set etme

// if (randomNumber2 === 1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
//     }
// if (randomNumber2 === 2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
//     }
// if (randomNumber2 === 3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
//     }
// if (randomNumber2 === 4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
//     }
// if (randomNumber2 === 5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
//     }
// if (randomNumber2 === 6){
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
//     }


 