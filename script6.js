
var array = [{
  num : 5,
  str : 'apple'
},{
  num : 7,
  str : 'pineapple'
},{
  num : 1,
  str : 'bannas'
}];

array.sort(function(val1,val2) {
  if (val1.str < val2.str) {
    return -1;
  }
  else {
    return 1;
  }
});

console.log(array);
