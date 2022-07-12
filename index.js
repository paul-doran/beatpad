
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




  function makeSound(key) {
  switch (key) {
    case "s":
      var snare = new Audio("sounds/Snare-13.wav")
      snare.play();
      break;

    case "d":
      var kick = new Audio("sounds/Kick-8.wav")
      kick.play();
      break;

    case "e":
      var hiHatClosed = new Audio("sounds/HiHat-4.wav")
      hiHatClosed.play();
      break;

    case "r":
      var hiHatOpen = new Audio("sounds/HiHat-3.wav")
      hiHatOpen.play();
      break;

    case "a":
      var clap = new Audio("sounds/Clap-6.wav")
      clap.play();
      break;

    case "w":
      var crash = new Audio("sounds/Crash-10.wav")
      crash.play();
      break;

    case "f":
      var stab = new Audio("sounds/Stabs-1.wav")
      stab.play();
      break;

      case "t":
        var chant = new Audio("sounds/Chant-3.wav")
        chant.play();
        break;

        case "g":
          var snap = new Audio("sounds/Snap-2.wav")
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
