describe('countAllPaarl Function' , function(){
    it('Should return number of registrations from Paarl', function(){
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
        });
        it('Should return number of registrations from Paarl', function(){
            assert.equal(countAllPaarl('CK 345, CJ 123'), 1);
            });
    });
    
     