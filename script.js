

let x = function() {
  console.log('Im Called from inside  the function x');
};

let y = function(callback) {
  console.log('Inside y function');
  callback();
};

y(x);
