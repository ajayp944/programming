// write a function called same which accept two arrays.
// Ths funnction should return true if the every value in the array has its' corresponding value 
// squared in the second array. The frequesy of value must be same.
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,7,4,7,5], [25,1,49,49,16]));
console.log(same([1,2,3,2,5], [9,1,4,4,11]));
console.log(same([2,4,7], [1,4]));
