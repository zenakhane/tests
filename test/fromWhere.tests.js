describe('fromWhere function' , function(){
    it('Should return location', function(){
        assert.equal('Cape Town', fromWhere('CA'));
        });
        it('Should return location', function(){
            assert.equal('Paarl', fromWhere('CJ'));
            });
            it('Should return location', function(){
                assert.equal('Some other place!', fromWhere('Cy'));
                });
     
    });
    
     