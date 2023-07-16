arrBetween=(num1,num2,arr)=>{
    const result=[];
    for(let i=0;i<arr.length;i++){
        const num=arr[i];
    if(num>num1 && num<num2){
       result.push(num);
     }
    }
    return result;
}
console.log(arrBetween(3,8,[1,5,7,10]));