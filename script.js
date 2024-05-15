"use strict";

// завдання 1

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

function byProperty(property, direction) {
    return function (a, b) {
        if (direction === '>') {
            return a[property] > b[property] ? 1 : -1;
        } else if (direction === '<') {
            return a[property] < b[property] ? 1 : -1;
        }
    };
}

console.log(movies.slice().sort(byProperty('releaseYear', '>')));
console.log(movies.slice().sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.slice().sort(byProperty('movieName', '>')));


// завдання 2

function someFunction(a, b, c) {
	return a + b * c;
};

function slower(func, seconds) {
    return function (...allArgs) {
        console.log(`Chill out, you will get your result in ${seconds} seconds.`);
        setTimeout(() => {
            const res = func(...allArgs);
            console.log("Result:", res);
        }, seconds * 1000);
    };
};

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(3,4,3);