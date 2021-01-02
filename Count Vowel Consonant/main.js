function countVowelConsonant(str) {
  // write code here
  let vowel = ["a", "e", "i", "o", "u", "y"];
  let alphabet = str.split("");
  let result = 0;
  
alphabet.reduce (function (sum, letter) {
    if (vowel.includes(letter)) {
    sum = 1;
    } else  sum = 2;
    result = result + sum;
    }, 0)
    return result
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});