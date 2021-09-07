//This file contains all the sorting functions which are going to be used in the sandbox.js file.

// Dumb sorting algorithm. O(n^2).
async function dumbSort(array){
    for(let i = 0; i < array.length; i++){
        // wink(i);
        for(let j = i; j < array.length; j++){
            wink(j);
            if(array[j] < array[i]){
                [array[i],array[j]] = [array[j], array[i]];
            }
            let dummy = await(delay(1));
            unwink(j);
            fillMain(array);
        }
        // unwink(i);
    }
}

// Wait for certain time before the execution of the next line.
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

//This one returns a promise.
function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
}

// Insertion Sort Function

async function insertionSort(arr) {
    //number of elements in the array
    var len = arr.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
        wink(i);
      //store the current value
      tmp = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > tmp) {
        wink(j);
        let dummy = await delay(1);
        // move the number
        arr[j+1] = arr[j];
        j--;
        fillMain(arr);
        // unwink(j);
      }
      //Inserts the temporary value at the correct position
      arr[j+1] = tmp;
      fillMain(arr);
    //   unwink(i);
    }
    return arr
  }

//Quick sort.
function swap (arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
async function partition (arr, low, high)  {
    let q = low, i;
    for (i = low; i < high; i++) {
        if (arr[i] < arr[high]) {
            wink(i);
            wink(q, '#F93943');
            swap(arr, i, q);
            q++;
            let dummy = await delay(1);
            fillMain(arr);
        }
    }
    swap(arr, i, q);
    return q;
};
async function quickSort (arr, low = -1, high = arr.length)  {
    if (low < high) {
        let pivot = await partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
        return arr;
    }
};