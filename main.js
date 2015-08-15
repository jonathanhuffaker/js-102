// Write a JavaScript function that accepts an array as an argument, and returns a new array that is sorted.

function myNewArrAsArg() {

var newArray = ["apple", "pear", "mango", "blueberry"];
console.log(newArray);
var sortArray = newArray.sort();
return console.log(sortArray);
}

// 8. If there is a value, and its numeric value is less than 10000, 
// call a function that passes in the user-entered value as an argument, and the name of the function that multiplies by 5. 
//Example
// function myOtherOtherFunction() {
// 	var lessThanTenThou = document.getElementById("firstInput").value;
// 	if(lessThanTenThou <10001) {
// 	return document.write(multplyBy5(lessThanTenThou));
// }
// }

// function EntValInField () {
// var empt = document.getElementById("firstInput").value;
// if (empt == "") {
// 	alert("Please input a value");
// 	return false;
// }
// //I tried to comment the two lines below out and use the other else if
// //statement built but was unsucessful
// else {
// 	alert("Thanks for entering a value!");
// 	return true;
// }
// }