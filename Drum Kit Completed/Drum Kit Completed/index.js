//adding click event listener on all buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
var eachDrum = document.querySelectorAll(".drum")[i]
  eachDrum.addEventListener("click", function() {
    //first check which button was clicked
    var buttonInnerHTML = this.innerHTML;//contains either keys(w,a,s,d,j,k,l)so which particular one?
    makeSound(buttonInnerHTML); //then pass the innerhtml that was clicked to makesound function
    buttonAnimation(buttonInnerHTML);

  });

}

//dectecting keyboard press
document.addEventListener("keypress", function(event) {//add eventlistener to the keyboard keys
//keypress triggers function that allows it to pass in a parameter e.g(event)
//so we can tap into the events different properties.
// console.log(event)--press any key-its shows which specific key was pressed& passes it to makesound
  makeSound(event.key);
  buttonAnimation(event.key);

});

//addEventListener("keypress", callback()
// note:1 we can pass functions as parameters(callback function)e.g addEventListener("keypress", function(event)
//  2.we also have functions as callbacks(thing we get back after d event happens)eg function(event)
//event --is the item that triggers the "click"
function makeSound(key) {

  switch (key) {
    case "w":
      // var tom1 = new Audio("sounds/tom-1.mp3");
      // tom1.play();
      // or
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      // var tom2 = new Audio("sounds/tom-2.mp3");
      // tom2.play();
      // or 
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() { //takes a function & time in milisecs
    activeButton.classList.remove("pressed");
  }, 100);

}
