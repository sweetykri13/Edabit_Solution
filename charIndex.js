function charIndex(word, char) {
    let arr=[];
	for(let i=0;i<word.length;i++){
        if(char===word[i]){
            arr.push(i);
        }
    }
    return arr;
}
console.log(charIndex("helloe","e"));