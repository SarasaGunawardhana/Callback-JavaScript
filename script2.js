
let calculation = function(no1,no2,calType) {
  if (calType === "add") {
    return no1 + no2 ;
  }
  else if (calType == "multiply") {
    return no1 * no2;
  }
};

console.log(calculation(6,4,'add'));
