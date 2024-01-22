let arr = [1,0,4,3,0,2,0,1,3];
let k = "end";

const moving_zeros = (arr,k) =>{
    let p = "start";
    if(p === k){
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
    else{
        for(let i=0;i<arr.length;i++){
            if(arr[i] !== 0){
                for(let j=i+1;j<arr.length;j++){
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

    return arr;
}

console.log(moving_zeros(arr,k))