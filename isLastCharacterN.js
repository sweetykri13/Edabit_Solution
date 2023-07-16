isLastCharacterN=(arr)=>{
    for(let i=0;i<arr.length;i++){
    const lastchar=arr[i][arr[i].length-1];
    
        if(lastchar.toLowerCase()==="n"){
            return true;
        }
    }
        return false;
}
console.log(isLastCharacterN(["strna"]));