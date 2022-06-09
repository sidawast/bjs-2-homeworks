function compareArrays(arr1, arr2) {
  let result;

  result = (arr1.every((item, i) => item == arr2[i]));

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => item > 0 && item % 3 == 0).map(item => item);

  return resultArr; // array
}
