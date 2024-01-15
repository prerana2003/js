const str = "aa";
const pattern = "aa";


function containsAllCharacters(substr, pattern) {
	let count = pattern.length;

	for(let i=0;i<substr.length;i++){
		for(let j=0;j<pattern.length;j++){
			if(count>0 && substr.charAt(i) == pattern.charAt(j)){
				count--;
			}
		}
	}
	if (count > 0) {
		return false;
	}

	return true;
}

function findSmallestSubstring(str, pattern) {
	let smallestSubstring = "";

	let minLength = Number.MAX_VALUE;
	if(str.length<pattern.length){
		smallestSubstring = "";
	}
	else{
		for (let i = 0; i < str.length; i++) {
			for (let j = i; j < str.length; j++) {
				let substr = str.substring(i, j + 1);

				if (substr.length>=pattern.length && containsAllCharacters(substr, pattern)) {
					let currentLength = substr.length;

					if (currentLength < minLength) {
						minLength = currentLength;
						smallestSubstring = substr;
					}
				}
			}
		}
	}

	return smallestSubstring;
}

console.log(findSmallestSubstring(str,pattern));