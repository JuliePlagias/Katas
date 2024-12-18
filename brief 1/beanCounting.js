// function countBs(string) {
//   let result = 0;
//   let arr = string.split("");
//   for (let chara of arr) {
//     if (chara === "B") result++;
//   }

//   return result;
// }

function countChar(string, char) {
  let result = 0;
  let arr = string.split("");
  for (let chara of arr) {
    if (chara === char) result++;
  }
  return result;
}
console.log(countChar("charizard", "C"));
