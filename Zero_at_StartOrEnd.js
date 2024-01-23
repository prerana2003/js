let arr = [1,0,4,3,0,2,0,1,3,8,0,4,6,9,4,1,2,5];
let k = "start";

const moving_zeros = (arr,k) =>{
    let p = "start";
    let zeroCount= 0;
    let resArr = []
    if(p === k){
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
        console.log(zeroCount)
        console.log(arr.length)
        
        resArr = arr.slice(0,zeroCount)
        // arr.splice(0,zeroCount)

        for(let i=zeroCount;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i] === arr[j]){
                    // arr.splice
                }
            }
        }

        for(let i=zeroCount;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp
                }
            }
        }
    }
    else{
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i] !== 0){
                for(let j=0;j<i-1;j++){
                    if(arr[j] === 0){
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                        break;
                    }
                }
            }
        }
    }

    return [resArr,arr];
}

console.log(moving_zeros(arr,k))