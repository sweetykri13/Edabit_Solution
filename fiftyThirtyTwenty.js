fiftyThirtyTwenty=(ati)=>{
    let fifty=ati*0.5;
    let thirty=ati*0.3;
    let twenty=ati*0.2;
    let result = '{ "Needs": ' + fifty + ', "Wants": ' + thirty + ', "Savings": ' + twenty + ' }';
    return result;
}
console.log(fiftyThirtyTwenty(10000));