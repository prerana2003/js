arr = [1,3,2,3,3];
k = 2;

function maxEle(arr){
    let maxCount = k;
    let maxNum = 0;
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;j++){
            if(i != j && arr[i] === arr[j]){
                count++;
                if(count>=maxCount){
                    maxCount = count;
                    maxNum = arr[i];
                }
            }
        }
    }
    return maxNum;
}

const subArrIfValid = (subArr, max, k) =>{
    let count = 0;
    for(let i=0;i<subArr.length;i++){
        if(subArr[i]===max){
            count++;
            if(count >= k){
                return true;
            }
        }
    }
    return false;
}

const subArray = (arr, k) =>{
    let max = maxEle(arr);
    let countSubArrays = 0;
    let subArrays = [];
    

    if(max === 0){
        countSubArrays = 0;
    }
    else{
        for(let i=0;i<arr.length;i++){
            for(let j=i;j<arr.length;j++){
                let subArr = [];
                for(let k=i;k<j+1;k++){
                    subArr.push(arr[k]);
                }
                if(subArr.length >= k && subArrIfValid(subArr, max, k)){
                    subArrays.push(subArr);
                    countSubArrays++;
                }
            }
        }
    }

    return [countSubArrays,subArrays];
}

console.log(subArray(arr, k))