let size = 7;

for (let i = 0; i < size; i++) {
  let symbol = "";
  for (let j = 0; j < i + 1; j++) {
    symbol += "#";
  }
  console.log(symbol);
}
