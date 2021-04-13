describe('transportFee Function' , function(){
    it('Should return transport fee for a shift', function(){
        assert.equal('R20', transportFee('morning'));
        });
        it('Should return transport fee for a shift', function(){
            assert.equal('R10', transportFee('afternoon'));
            });
            // it('Should return transport fee for a shift', function(){
            //     assert.equal('R0.00', transportFee('night'));
            //     });
            

    });
    
     