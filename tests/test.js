describe('Vasya - chack', function(){
    var should = chai.should();

	it('should return "YES" when the clerk can make change', function(){
		expect(tickets([25, 25, 50, 50])).to.eql("YES");
	});

	it('should return "YES" when the clerk can make change', function(){
		(tickets([25,25])).should.eql("YES");
	});

	it('should return "NO" when the clerk can\'t make change', function(){
		expect(tickets([25, 25, 50, 20])).to.eql("NO");
	});

});