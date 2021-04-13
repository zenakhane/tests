describe('countAllFromTown Function' , function(){
    it('Should return number of registration numbers from a town', function(){
        assert.equal(2, countAllFromTown('CY 345 123, CL 345, CY 123', 'CY'));
        });
        it('Should return number of registration numbers from a town', function(){
            assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
            });
         
    });
    
     