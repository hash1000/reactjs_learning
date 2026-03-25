// checking sum zero - problem 1

let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkPairSum(array) {
  let left = 0;
  let right = array.length - 1;
  let sum;
  let newArray=[];
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      newArray.push(array[left], array[right]);
      right--;
      left++;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return newArray;

}

console.log(">>>", checkPairSum(array));
