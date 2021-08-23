
//dice1
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(Math.random()*6) + 1;

var randomDiceImage1="dice" + randomNumber1 + ".png";
var randomImageSource1="images/dice" + randomNumber1 + ".png"; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);



//dice2
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice" + randomNumber2 + ".png";
var randomImageSource2="images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


//xxx coninue
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "its a Draw!";
}

//activate button click
document.querySelector("button").addEventListener("click", function() {
//    console.log("Button Clicked");
    window.location.reload(false); 
})
