str = ")()())((()))((((())))";

const longestValidParenthesis = (str) =>{
    let length = 0;
    let count = 0;
    let i=0;

    while(i<str.length){
        let templength = 0;
        for(let j=i;j<str.length;j++){
            if(str.charAt(j) === ")"){
                count--;
            }
            else{
                count++;
            }
            if(count<0 || (count>0 && j===str.length-1)){
                count = 0;
                i++;
                break;
            }
            else if(count === 0){
                tempstr = str.slice(i,j+1);
                templength += tempstr.length;
                if(templength>length){
                    length = templength;
                }
                i=j+1;
            }
        }
    }

    return length;
}

console.log(longestValidParenthesis(str))