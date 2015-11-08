// function annoyingAlertBox() {
//   alert("HEY I AM AN ANNOYING ALERT BOX! PAY ATTENTION TO ME!");
// }

function greeting() {

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Hello!';
  }

  document.write('Woof! ' + greeting);
}

function startGame() {
  var firstAnswer = false;
  var secondAnswer = false;
  var thirdAnswer = false;

  while (!firstAnswer) {
    var firstQuestion = prompt("What is my name?");
    if (firstQuestion != "Lisa") {
      alert("Try again");
    } else {
      firstAnswer = true;
      alert("Correct");

      while (!secondAnswer) {
        var secondQuestion = prompt("What are my number one interests?");
        if (secondQuestion != "cats") {
          alert("Try again");
        } else {
          secondAnswer = true;
          alert("Correct");

          while (!thirdAnswer) {
            var thirdQuestion = prompt("What occurs once in a minute, twice in a moment and never in a thousand years?")
            if (thirdQuestion == "M" || "The letter M") {
              alert("You win");
              thirdAnswer = true;
            } else {
              alert("Try again");
            }
          }
        }
      }
    }
  }
}
