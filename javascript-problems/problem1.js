// checking sum zero - problem 1

let array = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

function checkPairSum(array) {
  let newArray = [];
  if (Array.isArray(array)) {
    for (a in array) {
      for (let b = 1; b < array.length; b++) {
        if (Number(array[a] + array[b]) === 0) {
          newArray.push(array[a], array[b]);
        }
      }
    }
    return newArray;
  }
}

console.log(">>>", checkPairSum(array));
