/*
Logarithmic algorithm

1. An algorithm is said to run in logarithmic time if its time execution 
   is proportional to the logarithm of the input size, and we mark it as O(log n).

2. O(log n) algorithms never look at all the elements in the input. logarithmic 
   time complexities usually apply to algorithms that eliminate large amounts of input elements in each step.


   BINARY SEARCH

  Once a list is ordered, it can be searched using a divide-and-conquer strategy. Binary search algorithm finds the
  middle of the given element and it compares to the desired object, If the match is found, the search is successful and is terminated.

If it is not matched, It determines the middle element is greater than, or less than the desired object.
 This will eliminate half of the list. It repeats the same procedure again and again until the desired object is found.
 */

// Example: BinarySearch Algorithm
function BinarySearch(arr, val){
  let start = 0;
  let end = arr.length - 1;

  while(start <= end){
    let middle = Math.floor((start + end) / 2);
    if(arr[middle] === val){
      return middle;
    }else if(arr[middle] < val){
      start = middle + 1;
    }else{
      end = middle -1;
    }
  }
}

// The array must be sorted first


// O(log n) => Time Complexity