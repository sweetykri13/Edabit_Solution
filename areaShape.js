areaShape=(a,b,str)=>{
if(str==="traingle"){
    let area=1/2*(a*b);
    return area;
}
else if(str==="parallelogram"){
  let area=(a*b);
  return area;
}
}
console.log(areaShape(8,6,"parallelogram"));