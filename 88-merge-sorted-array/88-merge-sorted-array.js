/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
 let shifted;
 for (let i = 0; i <= (m + n); i++) {
     while (nums2.length > 0 && nums1[i] === 0) {
        shifted = nums2.shift()
        nums1[i] = shifted }   
    }
 nums1.sort(((a, b) => { return a - b }))
    }