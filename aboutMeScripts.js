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
    if (["Misa", "misa", "Elsa", "elsa"].indexOf(firstQuestion) != -1) {
      alert("Close but try again");
    } else if (["Lisa", "lisa"].indexOf(firstQuestion) == -1) {
      alert("Try again");
    } else {
      firstAnswer = true;
      alert("Correct");

      while (!secondAnswer) {
        var secondQuestion = prompt("What are my number one interests?");
        if (["hamsters", "squirrels"].indexOf(secondQuestion) != -1) {
          alert("Close but try again");
        } else if (["cats", "Cats"].indexOf(secondQuestion) == -1) {
          alert("Try again");
        } else {
          secondAnswer = true;
          alert("Correct");

          while (!thirdAnswer) {
            var thirdQuestion = prompt("What occurs once in a minute, twice in a moment and never in a thousand years?")
            if (["M", "The letter M"].indexOf(thirdQuestion) == 0) {
              alert("You win");
              thirdAnswer = true;
            } else if (thirdQuestion == "") {
              alert("You're way off");
            } else {
              alert("Try again");
            }
          }
        }
      }
    }
  }
}
