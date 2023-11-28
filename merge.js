function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i<arr1.length && j<arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i<arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j<arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // typcial case
  const mid = Math.floor(arr.length/2); // split array into two
  const left = mergeSort(arr.slice(0, mid)); // beg to middle of array
  const right = mergeSort(arr.slice(mid)); // middle to end of array
  return merge(left, right);
}

module.exports = { merge, mergeSort};