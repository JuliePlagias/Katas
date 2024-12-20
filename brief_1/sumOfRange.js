function range(start, end, step = 1) {
  let arr = new Array();
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

// console.log(range(1, 3));

function sum(array) {
  let result = 0;
  for (let num of array) {
    console.log(num);
    result += num;
  }
  return result;
}

console.log(sum(range(10, -40, -2)));
