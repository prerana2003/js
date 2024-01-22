arr = [[3,1],[3,2,3],[1,4,3,2,3,3],[2,5,3,4]];
num = 3;
freq = 2;

const subArray = (arr,num,freq) =>{
    let count = 0;
    for(let i=0;i<arr.length;i++){
        count = 0;
        for(let j=0;i<arr[i].length;j++){
            if(arr[i][j] === num){
                count++;
                if(count === freq){
                    console.log(arr[i]);
                    break;
                }
            }
        }
    }
}

subArray(arr,num,freq)










// -----------------------------------------------------

//     let maxlength = 0;
//     let maxSS = []
//     let temparr = arr

//     for(let i=0;i<temparr.length-1;i++){
//         for(let j=i+1;j<temparr.length;j++){
//             if(arr[j]<arr[j-1]){
//                 // console.log(temparr)
//                 temparr.splice(arr[j])
//             }
//             if(j === temparr.length-1 && temparr.length>maxlength){
//                 maxSS = temparr
//                 console.log(maxSS)
//                 maxlength = temparr.length;
//             }
//         }
//         temparr = arr.slice(i+1,arr.length)
//     }

//     console.log("Longest Subsequence: ",maxSS)
//     return maxlength;