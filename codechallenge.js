function sumZero(array){

for (i=0; i < array.length; i++){
    for(j=0; j < array.length; j++){
        if (array[j] + array[i] === 0){
            return true
            }   
        }   
    }
}
console.log(sumZero([1, 2, 3, -2]))
//The runtime of this function is O(n^2)
//The space complexity is O(1)

function hasUniqueChars(string) {
    let uniqueChars = new Set([])
    for (let i = 0; i < string.length; i++) {
      uniqueChars.add(string[i])
    }
    return uniqueChars.size === string.length
  }
console.log(hasUniqueChars("Monday"))
//The runtime of this function is O(n)
//The space complexity is O(n)

function isPangram(string){
    const letters = string.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//The runtime of this function is O(n)
//The space complexity is O(1)

function longestWord (array) {
    let longestword = ``
    for (let i = 0; i < array.length; i++) {
        if (longestword.length < array[i].length) {
          longestword = array[i];
        }
      }
      return longestword.length;
}
console.log(longestWord(["hi", "hello"]))
//The runtime of this function is O(n)
//The space complexity is O(1)
