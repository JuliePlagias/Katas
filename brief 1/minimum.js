function min(a, b) {
  if (typeof a == "number" && typeof b == "number") return Math.min(a, b);
  else if (a < b) {
    return a;
  }
  return b;
}

console.log(min("Pomme", "Pamplemousse"));
