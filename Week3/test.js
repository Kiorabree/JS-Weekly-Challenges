//Challenge 1: Part 1: Iterate through this array and log out the sum of the numbers in the array to the console.
var array = [1,2,3,4,5];
var total = 0;
for (var i = 0; i < array.length; i += 1) {
  total += array[i];
};
console.log(total);

//Part 2: Use the .splice() function to insert the number 6 after the number 2 in the array.
array.splice(2, 0, 6);

console.log(array);

//Challenge 2: Using jQuery, change the .text( ) of “Answer” to “$6,500”.
$(function() {
  $("span").text("$6500");
});
