function whichIsLarger(f, g) {
	const resuF=f();
    const resuG=g();
    if(resuF>resuG){
         console.log("f");
    }
    else if(resuG>resuF){
        console.log("g");
    }
    else{
        console.log("neither");
    }
}
whichIsLarger(() => 5, () => 10);