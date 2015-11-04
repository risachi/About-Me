function annoyingAlertBox() {
  alert("HEY I AM AN ANNOYING ALERT BOX! PAY ATTENTION TO ME!");
}

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
