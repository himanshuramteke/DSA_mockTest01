//Time-Complexity = O(n);
//space-Complexity = O(1)

function moveZeroes(){
    let zeroCount = 0;
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            zeroCount++;
        }else if (zeroCount > 0){
            nums[i - zeroCount] = nums[i];
            nums[i] = 0;
        }
    }
}

// Test the function
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]