let arr = [3,2,4,8,1,3,5,8];
let sum = 9;

const subArraysOfSum = (arr,sum) =>{
    let resultArr = [];
    for(let i=0;i<arr.length;i++){
        let currSum = 0;
        for(let j=i;j<arr.length;j++){
            currSum += arr[j];
            if(currSum == sum){
                resultArr.push(arr.slice(i,j+1));
            }
        }
    }
    return resultArr;
}