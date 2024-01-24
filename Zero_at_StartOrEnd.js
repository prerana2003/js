let arr = [1,0,4,3,0,2,0,1,3,8,0,4,6,9,4,1,2,5,8];
let k = "start";

const moving_zeros = (arr,k) =>{
    let p = "end";
    let zeroCount= 0;
    let resArr = []
    if(p === k){
    // ------------------zeros at start--------------------
        for(let i=0;i<arr.length;i++){
            if(arr[i] !== 0){
                for(let j=i+1;j<arr.length;j++){
                    if(arr[j] === 0){
                        temp = arr[i];
                        arr[i] = arr[j];                        
                        arr[j] = temp;
                        zeroCount++;
                        break;
                    }
                }
            }
        }
        
        resArr = arr.slice(0,zeroCount)
        arr.splice(0,zeroCount)

        for(let i=0;i<arr.length;i++){
            if(!resArr.includes(arr[i])){
                resArr.push(arr[i])
            }
        }
        for(let i=0;i<resArr.length;i++){
            for(let j=i+1;j<resArr.length;j++){
                if(arr[i]>arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp
                }
            }
        }
    }

// ------------------zeros at end--------------------
    else{
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i] !== 0){
                for(let j=0;j<i-1;j++){
                    if(arr[j] === 0){
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        zeroCount++;
                        break;
                    }
                }
            }
        }

        resArr = arr.slice(-zeroCount)

        for(let i=0;i<arr.length;i++){
            if(!resArr.includes(arr[i])){
                resArr.push(arr[i])
            }
        }

        for(let i=0;i<resArr.length;i++){
            for(let j=i+1;j<resArr.length;j++){
                if(resArr[i]<resArr[j]){
                    temp = resArr[i];
                    resArr[i] = resArr[j];
                    resArr[j] = temp
                }
            }
        }
    }
    return resArr;
}

console.log(moving_zeros(arr,k))