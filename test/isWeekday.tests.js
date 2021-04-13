describe('isWeekday Function' , function(){
    it('Should return weekdays', function(){
        assert.equal(true,isWeekday('M,T,W,T,F'));
    });
    it('Should return weekdays', function(){
        assert.equal(false,isWeekday('S,S'));
    });
});