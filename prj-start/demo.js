function nonRepeat(input) {
  let isNotUnique = false;
  let uniqueArr = [...input];

  for (let i = 0; i <= input.length - 1; i++) {
    let currentChar = uniqueArr.shift();

    if (uniqueArr.includes(currentChar)) {
      uniqueArr.push(currentChar);
      if (i == input.length - 1) {
        isNotUnique = true;
      } else {
        continue;
      }
    } else {
      return i;
    }
  }
  if (isNotUnique) {
    return -1;
  }
}

console.log(nonRepeat("abba"));
console.log(nonRepeat("mark"));
console.log(nonRepeat("mlpml"));
