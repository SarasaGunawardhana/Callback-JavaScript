
let calculation = function(no1,no2,callback) {
  return callback(no1,no2);
};

console.log(calculation(6,4,function(a,b) {
  return a - b;
}));
