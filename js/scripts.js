$(document).ready(function() {
	displayNewQuote(quoteArray);
});

/**
When a visitor lands on the page, present one quote with two buttons.

$(document).ready(function() {
	load a random quote from the array
	load button1
	load button2
});
*/



var quoteArray = [['Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.', 'Curie'],
['Be less curious about people and more curious about ideas.', 'Curie'], 
['A scientist in his laboratory is not a mere technician: he is also a child confronting natural phenomena that impress him as though they were fairy tales.', 'Curie'], 
['I was taught that the way of progress was neither swift nor easy.', 'Curie'], 
['One never notices what has been done; one can only see what remains to be done.', 'Curie'], 
['Look deep into nature, and then you will understand everything better.', 'Einstein'], 
['It\'s not that I\'m so smart, it\'s just that I stay with problems longer.', 'Einstein'], 
['We cannot solve our problems with the same thinking we used when we created them.', 'Einstein'], 
['If you can\'t explain it simply, you don\'t understand it well enough.', 'Einstein'], 
['There are two ways to live: you can live as if nothing is a miracle; you can live as if everything is a miracle.', 'Einstein']]

/** shuffleArray function based on Fisher-Yates shuffle. From Stack Overflow. 
Builds a new version of the array by picking a random element to include first,
excluding it, then picking again, etc.
*/
var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// grabQuoteFromArray pops the last quote from the array so it can be presented to the user
// var grabQuoteFromArray = function(array) {
// 	quote = array.pop();
// 	return [quote, array];
// }

var subtractLastQuoteFromArray = function(array) {
	array.pop();
	return array;
}

var checkAnswer = function(submission, answer) {
	return submission === answer;
}

var displayNewQuote = function(array) {
	shuffleArray(array);
	var quoteAndAuthorArray = array.pop();
	$('.quote p').text(quoteAndAuthorArray[0]);   //displays quote
	
	return array;				// returns new array for next time
}

/**
var currentQuote = quote[0];
var currentAuthor = quote[1];

// When a visitor clicks on their answer, show them correct or incorrect.

var quoteArray = [[quotes for first person][quotes for second person]]
score = 0

take user guess
if inArray return correct
else return incorrect
add to score tally

// Give the option to view another quote, and when clicked laod a new quote for the user to guess on.

load prompt
if no:
	load score so far and message
if yes:
	load another random quote from an array
	repeat above block
	
// Show score at the end

load score
*/
