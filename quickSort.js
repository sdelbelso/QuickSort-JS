function quickSort(arr) {
	// base case
	if (arr.length === 1) {
		return arr;
	}
	
	const leftArr = [];
	const rightArr = [];
	const newArr = [];
	const pivot = arr.pop();
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}
	
	return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
}
