/**
 * @author maneeshavenigalla
 * You are given an integer array nums. You are initially positioned at the array's first index, and
 * each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
    let reach = 0;
    let i = 0;

    while (i < nums.length) {

        if (i > reach) {
            return false;
        }

        reach = Math.max(reach, i + nums[i]);

        if (reach > nums.length) {
            return true;
        }

        i++;
    }

    return true;
}

module.exports = canJump;