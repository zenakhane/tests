describe('findItemsOver Function' , function(){
    it('Should return items over 20', function(){
        assert.deepEqual(
            findItemsOver([
                {"name":"apples","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":3}
    
            ], 20),
            [
            {"name":"pears","qty":37},
            {"name":"bananas","qty":27}
        ]);

        });

    it('Should return items over 30', function(){
        assert.deepEqual(
            findItemsOver([
                {"name":"apples","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":3}
    
            ], 30),
            [
                {"name":"pears","qty":37}
        ]);

        });

    it('Should return items over 5', function(){
        assert.deepEqual(
            findItemsOver([
                {"name":"grapes","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":7}
    
            ], 5),
            [ 
                {"name":"grapes","qty":10},
                {"name":"pears","qty":37},
                {"name":"bananas","qty":27},
                {"name":"apples","qty":7}
    
                
        ]);

        });

    });

    
     