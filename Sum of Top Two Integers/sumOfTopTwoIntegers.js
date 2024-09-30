function sumOfTopTwoIntegers(arr) {
  let count = arr.length;
  let maxSum1 = 0;
  let maxSum2 = 0;
  for (let i = 1; i <= count; i++) {
    if (arr[i] > maxSum1) {
      maxSum2 = maxSum1;
      maxSum1 = arr[i];
    }
  }
  return maxSum1 + maxSum2;
}
let arr = [1, 4, 2, 3, 5];
console.log(sumOfTopTwoIntegers(arr));
