describe('isFromBellville Function' , function(){
     it('Should return from Bellville', function(){
         assert.equal(true, isFromBellville('CY 2265'));
            });
            it('Should return from Bellville', function(){
                assert.equal(false, isFromBellville('CA 4456'));
            });
        });
        