//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
function isUnique(string){
  let set = new Set(string)
  console.log(set)
  return set.size === string.length
}

console.log(isUnique('string'));
console.log(isUnique('hello'));