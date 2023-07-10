incrementItems=()=>{
    arr=[0,1,2,3];
    increment=[];
    for(i=0;i<arr.length;i++){
        increment.push(arr[i]+1);
    }
    return increment;
}
console.log(incrementItems());