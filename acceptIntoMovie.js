acceptIntoMovie=(age,isSupervised)=>{
if((age<=14 || isSupervised==true) || (age>15 || isSupervised==false)){
    return true;

}
else{
    return false;
}
}
console.log(acceptIntoMovie(14,true));