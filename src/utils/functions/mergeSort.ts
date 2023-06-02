const mergeSort = (arr: Country[]) => {
	const length = arr.length;
	// base case
	if (length <= 1) return;

	const middle = Math.round(length / 2);
	const leftArray: Country[] = [];
	const rightArray: Country[] = [];

	// left arr
	let i = 0;
	// right arr
	let j = 0;
	for (; i < length; i++) {
		if (i < middle) {
			leftArray[i] = arr[i];
		} else {
			rightArray[j] = arr[i];
			j++;
		}
	}
	mergeSort(leftArray);
	mergeSort(rightArray);
	merge(leftArray, rightArray, arr);
};

const merge = (leftArr: Country[], rightArr: Country[], array: Country[]) => {
	const leftSize = Math.round(array.length / 2);
	const rightSize = array.length - leftSize;
	let i = 0,
		l = 0,
		r = 0;

	while (l < leftSize && r < rightSize) {
		if (leftArr[l].name.common < rightArr[r].name.common) {
			array[i] = leftArr[l];
			i++;
			l++;
		} else {
			array[i] = rightArr[r];
			i++;
			r++;
		}
	}
	while (l < leftSize) {
		array[i] = leftArr[l];
		i++;
		l++;
	}
	while (r < rightSize) {
		array[i] = rightArr[r];
		i++;
		r++;
	}
};

export default mergeSort;
