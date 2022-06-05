// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = arr[0];
  max = arr[0];
  /*
  // вариант через while для поиска MIN 
  let arg = arr.length;
  min = arr[arg - 1];
  while(--arg) {
    if(arr[arg] < min) {
      min = arr[arg]
    } 
  }
  */
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
       min = arr[i]
    };

    if (max < arr[i]) {
      max = arr[i]
    }
    sum += arr[i];
    num = sum / arr.length;
    avg = Number(num.toFixed(2));
    
  } 

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {   
   if(max < func(arrOfArr[i])) {
     max = func(arrOfArr[i]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let sum, result, max, min;
  sum = 0;
  result = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
    result = max - min;
    sum = Math.abs(result);
  return sum;
}
