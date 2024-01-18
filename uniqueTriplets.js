arr = [3,5,2,1,6,5,1,3,4,5]
target = 8

const uniqueTriplets = (arr,target) =>{
    let targetArr = []
    for(let i=0;i<arr.length-2;i++){
        let tempsum = 0;
        let tempSubArr = [];
        for(let j=i;j<i+2;j++){
            tempsum += j
            if(tempsum === target){
                tempSubArr = arr.slice(i,j)
                targetArr.push(tempSubArr);
            }
        }
    }

    return targetArr;
}

console.log(uniqueTriplets(arr, target))