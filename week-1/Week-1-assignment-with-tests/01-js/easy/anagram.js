/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str)
{
  var removeSpaces=str.replace(/\s+/g,"").toLowerCase();
  var sorted=removeSpaces.split("").sort().join("");
  return sorted;

}

//convert to array sort it and then transform it back to a string and compare
function isAnagram(s1,s2)
{
  console.log(sort(s1));
  console.log(sort(s2));

  return sort(s1)===sort(s2);
  
}
console.log(isAnagram('Debit Card', 'Bad Credit'));

module.exports = isAnagram;
