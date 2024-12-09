//n nombre de prisonier
//k nombre de personne entre chaque mort
function josephus(n, k) {
  let prisoner = new Array();
  for (let i = 1; i <= n; i++) {
    prisoner.push(i);
  }
  //   console.log(prisoner);
  let index = -1;
  while (prisoner.length > 1) {
    index += k;
    // console.log(index);
    index = index % prisoner.length;
    prisoner = kill(prisoner, index);
    index -= 1;
    // console.log(prisoner);
  }
  return prisoner[0];
}

function kill(array, index) {
  let arr = new Array();
  for (let i = 0; i < array.length; i++) {
    if (i == index) continue;
    arr.push(array[i]);
  }
  return arr;
}
console.log(josephus(8, 2));
