var currentAnswer = '';
var submission = '';
var score = 0;

$(document).ready(function() {
	nextQuestion();
	
	$('#curie').click(function() {
		submission = 'Curie';
		checkAnswer(submission, currentAnswer);
	});
		
	$('#einstein').click(function() {
		submission = 'Einstein';
		checkAnswer(submission, currentAnswer);
	});
	
});


var nextQuestion = function() {
	if (quoteArray.length > 0) {
		currentAnswer = displayNewQuote(quoteArray);
		submission = '';
	} else {
		alert('Final score is ' + score);
	}
}



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
	if (submission === answer) {
		$('.feedback-text').text('You got it right!');
		score = score + 1;
		$('.score').empty().append('Score: ' + score);
		nextQuestion();
	} else {
		$('.feedback-text').text('You got it wrong!');
		$('.score').empty().append('Score: ' + score);
		nextQuestion();
	}
}

var displayNewQuote = function(array) {
	shuffleArray(array);
	var quoteAndAuthorArray = array.pop();
	$('.quote p').text(quoteAndAuthorArray[0]);   //displays quote
	
	return quoteAndAuthorArray[1];				// returns new array for next time
}
