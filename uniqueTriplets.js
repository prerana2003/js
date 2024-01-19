arr = [3,5,2,1,6,5,1,3,4,5,3,6,3,7,1,3,4,2,2,1]
target = 8

const uniqueTriplets = (arr,target) =>{
    let targetArr = []
    let tempsum = 0;
    let tempSubArr = [];

    for(let i=0;i<arr.length-2;i++){
        tempsum = 0;
        tempSubArr = [];
        for(let j=i;j<=i+2;j++){
            tempsum += arr[j];
            if(tempsum === target && j === i+2){
                tempSubArr = arr.slice(i,j+1)
                targetArr.push(tempSubArr);
            }
        }
    }

    return targetArr;
}

console.log(uniqueTriplets(arr, target))