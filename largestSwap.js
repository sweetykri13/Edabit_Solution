function largestSwap(num) {
    let sum=0
    while(num>0){ 
	sum=num%10+sum*10;
    num=Math.floor(num/10);
    }
    return sum;
}
console.log(24>largestSwap(24));