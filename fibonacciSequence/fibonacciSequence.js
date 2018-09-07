"use strict";

let z;

let startingNumber = prompt("Enter the starting integer for your fibonacci sequence");

let iterations = prompt("Enter iterations for fibonacci sequence");

let x = parseInt(startingNumber);

let y = parseInt(startingNumber);

for (var i = 0; i < iterations; i++) {
	z = x + y;

	y = x;

	x = z;

	console.log(z);
}