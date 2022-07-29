
// **Problem-4**:  
//   Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
const dividents = [1, 2, 3, 4, 5, 6, 7, 8, 9]

resultDict = {}


dividents.forEach((divident) => {
  let count = 0;
  numbers.forEach((num) => {
    // if the current number is divided by current divident, increase the count
    if (num % divident == 0) {
      count += 1;
    }
    resultDict[divident] = count;
  })
})

console.log(resultDict);