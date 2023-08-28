// Implement a cloneDeep function that can produce a deep copy of any variable passed in it.


/*
 * Given an n x n matrix and an integer x, find the position of x in the matrix if it is present. 
 * Otherwise, print “Element not found”.
 * Every row and column of the matrix is sorted in increasing order. 
 * 
 * Input: mat[4][4] = [
 * 											[10, 20, 30, 40],  
 * 											[15, 25, 35, 45],
 * 											[27, 29, 37, 48],
 * 											[32, 33, 39, 50]
 * 										]
 * 										x = 29
 * 										Output: (2, 1)
 * 
 *                    [
 * 											[10, 20, 30, 40],  
 * 											[15, 25, 35, 45],
 *                      [16, 28, 36, 47],
 * 											[27, 29, 37, 48],
 * 											[32, 33, 39, 50]
 * 										]
 * mat[n][m]
 * First row -> log(m)*log(n/2)
 * 
 *
 */



function binanrySearch(arr, start, end, num) {
  if (start > end) {
    return -1;
  }

  const middleElement = start + ((end - start) / 2);
  if (arr[middleElement]  ===  num) {
    return middleElement;
  } else if (arr[middleElement]  <  num) {
    return binanrySearch(arr, middleElement+1, end, num);
  } else {
    return binanrySearch(arr, start, middleElement, num);
  }
}



const find(input, x) => {
   console.log('inside find')
   if(!input.length) {
     return "Invalid input";
   }
   
  for (let i = 0; i < input.length; i++) {
    const index = binanrySearch(input[i], 0, input[i].length, x);
    if (input[i][index] === x) {
      console.log(i, index);
      return;
    }
  }

  console.log('Element Not Found')
}

find([
[10, 20, 30, 40],  
[15, 25, 35, 45],
[27, 29, 37, 48],
[32, 33, 39, 50]], 29);




// const cloneDeep = (input) => {
  
//   if (typeof input  === 'string' || typeof input  === 'number' || typeof input  === 'boolean' || typeof input  === 'function' || !input) {
//     return input;
//   }
  
//   if(Array.isArray(input)) {
//     return input.map((item) => cloneDeep(item));
//   }
  
//   if(typeof input === 'object') {
//      return Object.keys(input).reduce((acc, key) => {
//         acc[key] = cloneDeep(input[key]);
//         return acc;
//     }, {});
//   }
// }




// // Example 1
// const input1 = {
//   name: 'John',
//   age: 30,
//   nestedObj: {
//     prop1: 'value1',
//     prop2: 'value2',
//   },
//   education: null,
//   friends: [undefined, {name: "test"}],
//   hobbies: ['reading', 'coding'],
// };

// const output1 = cloneDeep(input1);
// output1.nestedObj.prop1 = "test"
// output1.friends.push("sam")

// console.log(input1);
// console.log(output1);

// // Example 2
// const input2 = [null, 0, "abcd"]
// const output2 = cloneDeep(input2)
// output2[2] = "xyz"

// console.log(input2);
// console.log(output2);

///////////////

