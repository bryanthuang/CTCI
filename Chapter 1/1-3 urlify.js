//Write a method to replace all spaces in a string with '%20: You may assume that the string
//has sufficient space at the end to hold the additional characters, and that you are given the "true"
//length of the string.

function urlify(string){
  return string.trim().replace(/\s/g, '%20');
}
// regex  / /      \s is looking for all spaces     g is for global scope
console.log(urlify('string string'))