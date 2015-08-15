// Write a JavaScript function that accepts an array as an argument, 
// and returns a new array that is sorted.

function myNewArrAsArg(sortArray) {

var newArray = ["apple", "pear", "mango", "blueberry"];
console.log(newArray);
var sortArray = newArray.sort();
return console.log(sortArray);
}

// 5. Write a JavaScript function that accepts an array, 
// and returns a new array that contains elements in the array you passed in that 
// are larger than 25.



// 8. When the button is clicked retrieve the value of the input box. 
// You should enter in a comma-delimited list of integers (e.g. 10,3,5,67,22,etc..).

function EntValInField () {
var empt = document.getElementById("firstInput").value;
if (empt == "") {
	alert("Please input a value");
	return false;
}

// 9. Convert that string of comma-delimited numbers into an array.

else {
	var inputValue = empt.split(",");
	alert(inputValue);
	return true;
}
}