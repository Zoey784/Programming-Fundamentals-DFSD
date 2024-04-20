var arr = [1,2,3,4,5,6,7];
var large = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > large ) {
    large = arr[i];
  }
}
console.log(large);