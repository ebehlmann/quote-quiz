describe('displayNewQuote', function() {
    it('should return the author of the popped quote', function() {
        displayNewQuote([['quote', 'author']]).should.equal('author');
    });
});