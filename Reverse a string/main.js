function reverseAString(str) {
    //  write code here.
    let arr = str.split('').reverse().join('');
    return(arr);
}



/**
* Test Suite 
*/
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';
        
        // act
        const result = reverseAString(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('olleh');
    });
});