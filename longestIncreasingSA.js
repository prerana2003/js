const arr = [4,3,4,5,7,6,1,3,4,9,10,8,5]

const longestIncreasingSubSequence = (arr) =>{
    let maxlength = 0;
    let maxSA = []

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[j-1]){
                let tempSA = arr.slice(i, j)
                
                if(tempSA.length>maxlength){
                    maxlength = tempSA.length
                    maxSA = tempSA
                }
                break;
            }
        }
    }

    console.log("Longest Subsequence: ",maxSA)
    return maxlength;
}

console.log("Length of Longest Subsequence: ",longestIncreasingSubSequence(arr))