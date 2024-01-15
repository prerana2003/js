const arr = [1,2,2,4,5,1,3,0,2,4];

const uniqueElements = (arr) =>{
    let result = [];
    let visited = [];
    
    for(let i=0;i<arr.length;i++){
        let count = 0;
        if(visited.includes(arr[i])){
            continue;
        }
        else{
            visited.push(arr[i]);
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]===arr[j]){
                    count = 1;
                }
            }
            if(count === 0){
                result.push(arr[i]);
            }
        }
        
    }

    return result;
}

console.log(uniqueElements(arr));