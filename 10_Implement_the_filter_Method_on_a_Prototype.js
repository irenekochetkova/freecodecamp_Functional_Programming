// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.
// **********************************************************************

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  
    s.forEach(function(el) {
      if (callback(el)) {
        newArray.push(el);
      }
    });
  // Add your code above this line
  console.log(newArray);

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});