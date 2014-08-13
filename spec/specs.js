describe('subtractLastQuoteFromArray', function() {
    it('should remove the last quote from the array', function() {
        subtractLastQuoteFromArray(['test1', 'test2', 'test3']).should.deep.equal(['test1', 'test2']);
    });
});

describe('checkAnswer', function() {
	it('should return true if submission matches answer', function() {
		checkAnswer('curie', 'curie').should.equal(true);
	});
	
	it('should return false if submission does not match answer', function() {
		checkAnswer('curie', 'einstein').should.equal(false);
	});
});