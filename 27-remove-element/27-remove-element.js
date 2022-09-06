/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let numsLength = nums.length
    let num = numsLength
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] !== val) {
            console.log(nums[i])
            nums.push(nums[i])
        } else {
            num--
        }
    }
    nums.reverse()
    return num
};