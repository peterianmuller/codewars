describe('Vasya - chack', function(){
	it('should return "YES" when the clerk can make change', function(){
		expect(tickets([25, 25, 50, 50])).to.eql("YES");
	});
});