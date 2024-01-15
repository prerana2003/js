let arr = [1,5,3,11,9];
function prob6(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }

    let min =arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }

    let temp = 0;
    for (i = 0; i <= max; i++) 
    {
      for (j = 0; j < arr.length; j++) 
      {
        if (arr[j] == i) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
          break;
        }
      }
    }

    for (i = 0; i < arr.length; i++)
    {
      if (arr[i] != i) {
        arr[i] = -1;
      }
    }
    return arr;
}
document.write(arr);