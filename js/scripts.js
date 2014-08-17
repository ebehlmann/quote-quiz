var currentAnswer = '';							// setup variables
var submission = '';
var score = 0;

$(document).ready(function() {
	nextQuestion();										//presents the first quote
	
	$('#curie').click(function() {		// gives feedback on curie click & presents next turn
		submission = 'Curie';
		checkAnswer(submission, currentAnswer);
	});
		
	$('#einstein').click(function() {		// gives feedback on einstein click and presents next turn
		submission = 'Einstein';
		checkAnswer(submission, currentAnswer);
	});
	
});


// Array contains 10 arrays, each with a quote and author

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


var displayNewQuote = function(array) {
	shuffleArray(array);
	var quoteAndAuthorArray = array.pop();				// grabs last quote from array, reduces array by 1 quote
	$('.quote span').text(quoteAndAuthorArray[0]);   //displays quote
	
	return quoteAndAuthorArray[1];								// returns author for answer checking
}


var nextQuestion = function() {
	if (quoteArray.length > 0) {											// continues to run until the array has been emptied
		currentAnswer = displayNewQuote(quoteArray);		// sets currentAnswer variable to author of current quote
		submission = '';																// clears submission variable
	} else {
		$('.final-score-main').text('Final score: ' + score + '/10');		// runs when all quotes have run
		$('#curie, #einstein, .feedback-text, .score, .instructions').hide();
		$('blockquote').slideUp();
		if (score < 3) {
			$('.final-score-category').text('Better hit the science books!');
		} else if (score < 8) {
			$('.final-score-category').text('Not bad, but you\'re no Einstein.');
		} else {
			$('.final-score-category').text('You\'re a certified science whiz!');
		}
	}
}


var checkAnswer = function(submission, answer) {			// called upon curie or einstein click
	if (submission === answer) {
		$('.feedback-text').text('Correct!');		// gives feedback
		$('.feedback-text').css('color', '#4E994E');
		score = score + 1;																// updates score
		$('.score').empty().append('Score: ' + score);
		nextQuestion();																		// proceeds to next question
	} else {
		$('.feedback-text').text('Sorry, that\'s not correct');
		$('.feedback-text').css('color', '#A30000');
		$('.score').empty().append('Score: ' + score);
		nextQuestion();
	}
}