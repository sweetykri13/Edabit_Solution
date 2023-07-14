check=(arr,num)=>{
    for(let i=0;i<arr.length;i++){
       if(arr[i]===num){
        return true;
       }
    }
        return false;
       }
console.log(check([1,2,3,45,6],6));