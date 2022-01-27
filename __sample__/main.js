/* reverseWords(string)
Parameters- (string - any JavaScript String)
Return Value- A version of String with every character of each word reversed, but the words in their original order.

Examples:
reverseWords('All Code All Day')      // -> "llA edoC llA yaD"
reverseWords('What is unit testing?') // -> "tahW si tinu ?gnitset"
reverseWords('follow your passion')   // -> "wollof ruoy noissap"
reverseWords('Hello, how are you?')   // -> ",olleH woh era ?uoy" */

function reverseWords(string) {
  var output = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord = string[i] + currentWord;
    } else {
      output += currentWord + ' ';
      currentWord = '';
      output += currentWord;
    }
  }
  output += currentWord;
  return output;
}

const testing = reverseWords('all code all day');
console.log('testing 1,2,3:', testing);
