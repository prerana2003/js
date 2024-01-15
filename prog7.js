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