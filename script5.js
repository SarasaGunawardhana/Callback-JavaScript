

let add = function(a,b) {
  console.log('Addition');
  return a + b;
};

let multiply = function(a,b) {
  console.log('Multiplication');
  return a * b;
};

let calculation = function(no1,no2,callback) {
  if (typeof(callback) === "function") {
    return callback(no1,no2);
  }

};

console.log(calculation(6,4,add));
