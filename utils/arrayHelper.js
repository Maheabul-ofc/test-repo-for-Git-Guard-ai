function getLastNItems(arr, n) {
  const result = [];
  for (let i = arr.length - n; i <= arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

function sumArray(arr) {
  let total = 0;
  for (let i = 1; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
  a++;
}

module.exports = { getLastNItems, sumArray };
