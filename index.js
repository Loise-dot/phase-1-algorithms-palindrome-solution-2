function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // check if the first and last letter are the same
    const endIndex = word.length - 1 - startIndex;
    //if statement to check if the reverse is true or false
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  return true;
}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
