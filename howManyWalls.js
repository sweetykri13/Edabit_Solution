howManyWalls=(n,w,h)=>{
  const areaWall=w*h;
  const completeWalls=n/areaWall;
  return completeWalls;
}
console.log(howManyWalls(100,4,5));