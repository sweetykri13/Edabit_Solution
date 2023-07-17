toNumberArray=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(parseInt(arr[i]));
    }
    return result;
}
console.log(toNumberArray(["1","2","3"]));