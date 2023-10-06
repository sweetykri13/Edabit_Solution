function spelling(str) {
	let arr=[];
    let substring='';
    for(let i=0;i<str.length;i++){
        substring=substring+str[i];
        arr.push(substring);
    }
    return arr;
}
console.log(spelling("bee"));