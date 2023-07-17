operate=(num1,num2,operate)=>{
 switch(operate){
    case "+":
        return num1+num2;
    case "-":
        return num1-num2;
    case "*":
        return num1*num2;
    case "%":
        return num1%num2;
    case "/":
        return num1/num2;
    default:
        return NaN;
 }
 
}
console.log(operate(3,4,"+"));