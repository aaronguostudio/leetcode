/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var a = 10
  for ( let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          if ( target === nums[i] + nums[j] && i !== j ) {
              return [i, j]
          }
      }
  }
  return null
};

console.log(twoSum([2, 5, 5, 11], 10))
