function bubbleSort(arr) {
  // going through each element in the array
  for (let i=0; i<arr.length; i++) {
    // going through each element in the shortened array (largest number of previous iteration already at end of array)
    for (let j=0; j<arr.length-i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;