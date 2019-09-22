
// // ---------------------missing values in array-------------------------------------

// let arr = [1,2,3,4,5,6,7,8,10];
// const findMissingNum = (arr) => {
//   for(var i = 0; i < arr.length - 1; i++) {
//     if(arr[i] + 1 != arr[i+1] ) {
//       return arr[i] + 1;
//     }
//   }
  
//   return false;
// }
// console.log(findMissingNum(arr));

// // ---------------------------find duplicates from an array----------------------------------------------
// const arr = [1,2,3,4,5,6,7,7,8,6,10];
// const findDupes = (arr) => {
//   const observed = {};
//   for(let i = 0; i < arr.length; i++) {
//     if(observed[arr[i]]) {
//       return arr[i]
//     } else {
//         console.log(observed[arr[i]]);
//       observed[arr[i]] = arr[i];
//     }
//   }
  
  
  
//   return false;
// }

// console.log(findDupes(arr));


// --------------------cumulative sum-------------------------------------
// let arr = [1,3,5,7];
// const cumulativeSum = list => {
//   let result = [list[0]];
//     console.log('-----------result-------------', result);
//   for(let i = 1; i < list.length; i++) {
//     result.push(list[i] + result[i-1]);
//   } 
  
//   return result;
// }

// console.log(cumulativeSum(arr));



// ---------------------multiple duplicates ---------------------------------------------
// const arr = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

// const returnMultipleDupesArray = (arr) => {
//   let observed = {};
//   let dupesArray = [];
  
//   for(let i = 0; i < arr.length; i++) {
//     console.log('----------------ob1-------------' , observed[arr[i]],observed[arr[i]]);
//     if(observed[arr[i]]) {
//       if(observed[arr[i]] === 1) {
//         dupesArray.push(arr[i]);
//       }
//       observed[arr[i]] = observed[arr[i]] + 1;
//     } else {
//       observed[arr[i]] = 1;
//     }
//   }
  
//   return dupesArray;
// }
// console.log(returnMultipleDupesArray(arr));




// --------------------remove duplicates--------------------------

// const arr = [1, 1, 1, 1, 1, 1, 1];
// const removeDupes = (arr) => {
//   let result = [];
//   let previous = arr[0];
//   result[0] = previous;
  
//   for(let i = 0; i < arr.length; i++) {
    
//     if (arr[i] != previous) {
//       result.push(arr[i]);
//     }
    
//     previous = arr[i];
//   }
  
//   return result;
// }
// console.log(removeDupes(arr));


















