describe('countRegNumber Function' , function(){
    it('Should return from number of registration number', function(){
        assert.equal('3', countRegNumber('CA 182736,CY 523519,CJ 812328'));
        }); 
        it('Should return from number of registration number', function(){
            assert.equal('1', countRegNumber('CJ 812328'));
            });
     
    });
    
     