// iterative

// function detectSum(nums, n){
//     mapSum = {}

    

//     for(let i = 0; i < nums.length - 1; i++){
//         for (let j = 1; j < nums.length-1;j++){
//             if(nums[i]+nums[j]===n){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(detectSum([1,2,3], 6))

// faster

function detectSum(nums,n){
    mapSum = {}
    for(let i = 0; i < nums.length - 1; i++){
        targetSum = n - nums[i]
        if(targetSum in mapSum){
            return true;
        }else{
            mapSum[nums[i]] = i;
        }
    }
    return false
}

console.log(detectSum([1,2,3,], 6))