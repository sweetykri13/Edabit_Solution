function seriesResistance(arr) {
    sum=0;
    for(let i=0;i<arr.length;i++){
	sum=arr[i]+sum;
    }
    return sum;
}
const arr=[1,2,3]
console.log(seriesResistance(arr));