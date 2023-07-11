compare_to_100=(x)=>{
    if(x>100){
        return "gretest";
    }
    else if(x<100){
        return "smaller";
    }
    else{
        return "equal";
    }
}
console.log(compare_to_100(200));