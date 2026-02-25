// complete the given function

function palindrome(str){
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
module.exports = palindrome
