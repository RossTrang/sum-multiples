// Allowing users to define arguments
let sumTotal = 0;
let firstNum = prompt("Enter a number");
let secondNum = prompt("Enter another number");

function getMultiples(firstNum,secondNum) {
for (let counter = 1; counter < 1000; counter++) {
	if (counter % firstNum === 0 || counter % secondNum === 0) {
		sumTotal+=counter;}
	};
	alert('Sum total of all multiples of ' + firstNum + ' or ' + secondNum + ' below 1000 is: ' + sumTotal);
	location.reload()
}

getMultiples(firstNum,secondNum);