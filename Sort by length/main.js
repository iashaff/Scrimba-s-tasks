function sortByLength(strs) {
    //  write code here.
function compare (a, b) {
    if (a.length > b.length) return 1;
    if (a.length == b.length) return 0;
    if (a.length < b.length) return -1;
}
 return(strs.sort(compare))   
}



/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});