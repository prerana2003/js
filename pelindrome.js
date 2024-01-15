num = 123;

const isPalindrome = (n) => {
    let temp = n;
    let rev = 0;
    let mod = 0;

	while(temp>0) {
        mod = temp%10;
		rev = rev*10 + mod;
		temp = Math.trunc(temp/10);
	}
    if(rev === n){
        return true;
    }
    else{
        return false;
    }
}

const smallerPalindrome = (num) =>{
    let smallerPalNum = 0;
    for(let i=num;i>Number.MIN_VALUE;i--){
        if(isPalindrome(i)){
            smallerPalNum = i;
            break;
        }
    }
    return smallerPalNum;
}



const largePalindrome = (num) =>{
    let largePalNum = 0;
    for(let i=num;i<Number.MAX_VALUE;i++){
        if(isPalindrome(i)){
            largePalNum = i;
            break;
        }
    }
    return largePalNum;
}

const nearestPalindrome = (num) => {
    let x = smallerPalindrome(num);
    let y = largePalindrome(num);
    let nearestPalNumber = 0;

    if((num - x) > (y - num)){
        nearestPalNumber = y;
    }
    else{
        nearestPalNumber = x;
    }

    return nearestPalNumber;
}

console.log(nearestPalindrome(num));