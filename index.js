
var drumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < drumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);

  }

  )};

  document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    makeAnimation(event.key);

  });


// var padBank1 = [s d e r a w f t g]
var padBank1 = ["sounds/Snare-13.wav", "sounds/Kick-8.wav", "sounds/HiHat-4.wav", "sounds/HiHat-3.wav", "sounds/Clap-6.wav", "sounds/Crash-10.wav", "sounds/Stabs-1.wav", "sounds/Chant-3.wav", "sounds/Snap-2.wav"];
var padBank2 = ["sounds2/clp_can.wav", "sounds2/bd_isampleoldskool.wav", "sounds2/hat_classical.wav", "sounds2/prc_hit.wav", "sounds2/snr_dwreal.wav", "sounds2/ride_full.wav", "sounds2/shaker_bot.wav", "sounds2/tom_discodisco.wav", "sounds2/tom_taste.wav"];
var clickCount = 0;

document.getElementById("padBank").addEventListener("click", function() {

clickCount += 1;
var div2 = clickCount % 2;

if (div2 == 1) {
    padBank1 = padBank2;
  }

  else if (div2 == 0) {
    padBank1 = ["sounds/Snare-13.wav", "sounds/Kick-8.wav", "sounds/HiHat-4.wav", "sounds/HiHat-3.wav", "sounds/Clap-6.wav", "sounds/Crash-10.wav", "sounds/Stabs-1.wav", "sounds/Chant-3.wav", "sounds/Snap-2.wav"];
  }

  makeAnimationPadBank();

});

// var keyBPressed = 0;
// document.addEventListener("keydown", function(event) {
//
// keyBPressed++;
// var keyPressed = event.key;
// 
// if (keyPressed === "b") {
//   makeAnimationPadBank();
// }
//
// var divs2 = keyBPressed % 2;
// if (divs2 == 1) {
//     padBank1 = padBank2;
//   }
//
//   else if (divs2 == 0) {
//     padBank1 = ["sounds/Snare-13.wav", "sounds/Kick-8.wav", "sounds/HiHat-4.wav", "sounds/HiHat-3.wav", "sounds/Clap-6.wav", "sounds/Crash-10.wav", "sounds/Stabs-1.wav", "sounds/Chant-3.wav", "sounds/Snap-2.wav"];
//   }
//
// });






  function makeSound(key) {
  switch (key) {
    case "s":
      var snare = new Audio(padBank1[0])
      snare.play();
      break;

    case "d":
      var kick = new Audio(padBank1[1])
      kick.play();
      break;

    case "e":
      var hiHatClosed = new Audio(padBank1[2])
      hiHatClosed.play();
      break;

    case "r":
      var hiHatOpen = new Audio(padBank1[3])
      hiHatOpen.play();
      break;

    case "a":
      var clap = new Audio(padBank1[4])
      clap.play();
      break;

    case "w":
      var crash = new Audio(padBank1[5])
      crash.play();
      break;

    case "f":
      var stab = new Audio(padBank1[6])
      stab.play();
      break;

      case "t":
        var chant = new Audio(padBank1[7])
        chant.play();
        break;

        case "g":
          var snap = new Audio(padBank1[8])
          snap.play();
          break;


    default:
      console.log(key);

  }
}


function makeAnimation(currentButton) {

  var buttonSelected = document.querySelector("." + currentButton);

  buttonSelected.classList.add("pressed")

setTimeout(removeButton, 100);

function removeButton() {
buttonSelected.classList.remove("pressed");

}

}


function makeAnimationPadBank() {

  var buttonPushed = document.getElementById("padBank");

  buttonPushed.id = "pressed";

setTimeout(buttonRemove, 100);

function buttonRemove() {
buttonPushed.id = "padBank";

}

}

