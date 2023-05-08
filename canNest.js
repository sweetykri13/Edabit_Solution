function canNest(arr1, arr2) {
	return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
    );
}
console.log(canNest([1,2,3,4],[1,2,3]));