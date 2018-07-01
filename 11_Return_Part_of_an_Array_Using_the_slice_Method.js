// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
// *******************************************************************************

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  var newArr = anim.slice(beginSlice, endSlice);
  return newArr;
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);