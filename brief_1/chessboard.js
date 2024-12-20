let board = "";
let width = 7;
let height = 7;
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
      board += "#";
    } else if (i % 2 != 0 || j % 2 != 0) {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);

// let white = true;
// for (let i = 0; i < height; i++) {
//   for (let j = 0; j < width; j++) {
//     if (white) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//     white = !white;
//   }
//   if (width % 2 == 0) white = !white;
//   board += "\n";
// }

// console.log(board);
