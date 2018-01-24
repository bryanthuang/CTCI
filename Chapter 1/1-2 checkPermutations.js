//Given two strings, write a method to decide if one is a permutation of the other
function checkPermutations(a, b){
  if(a.length !== b.length){
    return false;
  }
  let letters = {};

  for(let i = 0; i < a.length; i++){
    let current = a.charAt(i)
    letters[current] = (isNaN(letters[current]) ? 1 : letters[current]++)
  }
  for(let i=0; i < b.length; i++){
    let current = b.charAt(i);
    letters[current]--;
  }

  for(let key in letters) {
    if(letters[key] !== 0) {
      return false;
    }
  }
  return true;
}



console.log(checkPermutations("dog", "god")); // true
console.log(checkPermutations("dog", "gdo")); // true
console.log(checkPermutations("dog", "ogg")); // false
