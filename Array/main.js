function insertDashes(arr) {
    // write code here
    var text = [];
var text_row =[];

arr = (arr.split(''));


for (let i=0; i<arr.length; i++){

  if(arr[i] === ' '){
    text.push(text_row.join('-'));
    text_row=[]
  } else text_row.push(arr[i]); 
}

text.push(text_row.join('-'));
return(text.join(' '));

}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});