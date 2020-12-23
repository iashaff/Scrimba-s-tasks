function chunkyMonkey(values, size) {
    //  write code here.
    let newArray = [];
    
    for (i = 0; i < values.length; i += size){
    newArray.push(values.slice(i , i + size));
    }
    return(newArray); 
}



/**
* Test Suite 
*/
describe('chunkyMonkey()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;
        
        // act
        const result = chunkyMonkey(values, size);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });
});