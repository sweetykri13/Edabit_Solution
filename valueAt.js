function valueAt(arr, index) {
    const roundedIndex = Math.floor(index);
    return arr[roundedIndex];
  }
  const array = [1, 2, 3, 4, 5, 6];
  const index = 10 / 2;
  const result = valueAt(array, index);
  console.log(result);
  