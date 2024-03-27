function x() {
  var a = 7;
  function y() {
    console.log(a)
  }
  y();
}
x();

//set timeout

function time() {
  var i = 1;
  setTimeout(function() {
    console.log(i);
  }, 3000);
  console.log("NamasteJS")
}
time();

// timeout with let will work cos let has a block scope

function time_let() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000)
  }
  console.log("Namaste JavaScript")
}
time_let();
