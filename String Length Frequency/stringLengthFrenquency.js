function StringLengthFrequency(arr) {
  let lengths = arr.map((str) => str.length);

  let count = {};
  for (let length of lengths) {
    if (count[length]) {
      count[length]++;
    } else {
      count[length] = 1;
    }
  }

  let maxCount = 0;
  let value = 0;

  for (let length in count) {
    if (count[length] > maxCount) {
      maxCount = count[length];
      value = parseInt(length);
    }
  }

  return arr.filter((item) => item.length === value);
}
let arr = ["a", "ab", "abc", "cd", "def", "gh"];
console.log(StringLengthFrequency(arr));
