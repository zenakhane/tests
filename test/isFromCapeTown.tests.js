describe('isFromCapeTown' , function(){
    it('Should return CA' , function(){
        assert.equal(true, isFromCapeTown('CA 1234'));
    });
    it('Should return CA' , function(){
        assert.equal(false, isFromCapeTown('CJ 1234'));
    });
    it('Should return CA' , function(){
        assert.equal(true, isFromCapeTown('CA 2568'));
    });
});
