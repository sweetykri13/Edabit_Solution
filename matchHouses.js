function matchHouses(step){
    var flag=6;
    var step1,result;
if(step>1){
  var step1=step-1;
  var result=step*flag-step1;
  return result;
}
else{return flag;}
}
console.log(matchHouses(87));