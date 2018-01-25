// Second attempt after actually doing some JS tutorials!
let sumTotal = 0;

for (let counter = 1; counter < 1000; counter++) {
	if (counter % 3 === 0 || counter % 5 === 0) {
		sumTotal+=counter;}
};

console.log('Sum total of all multiples of 3 or 5 below 1000 is: ' + sumTotal)
