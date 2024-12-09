function reverseArray(array) {
  let arr = new Array();
  for (let i = array.length; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}

function reverseArrayInPlace(array) {
  let arr = new Array();
  for (let i = array.length; i > 0; i--) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    array[i] = arr[i];
  }
  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));

//reverseInPlace will probably be used more , and reverseArray runs faster
