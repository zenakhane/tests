describe('Greet Function' , function(){
    it('Should return Hello, Zena', function(){
        assert.equal('Hello, Zena', greet('Zena'));
    });
    it('Should return Hello, Bee', function(){
        assert.equal('Hello, Bee', greet('Bee'));
    });


});

   
