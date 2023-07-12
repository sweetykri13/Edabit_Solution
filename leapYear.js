leapYear=(year)=>{
    if((year%4===0 && year%100!==0) || year%400===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(leapYear(2040));