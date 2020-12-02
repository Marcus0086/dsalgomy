export function getBinarySearchAnimations(array,key) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    binarySearch(array, key, animations);
    return animations;
} 

function binarySearch(
    arr,
    key,
    animations
) {
    arr = arr.sort((a, b) => (a - b));
    let l = 0,
        h = arr.length,
        mid = 0;
    animations.push([[l, h - 1], [3]]);
    animations.push([[l, h - 1], [11]]);
    while (l <= h) {
        mid = Math.floor((l + h) / 2);
        animations.push([[mid], [4]]);
        animations.push([[mid], [5]]);
        if (key === arr[mid]) {
            animations.push([[mid], [10]]);
            return mid;
        }
        if (key < arr[mid]) {
            h = mid - 1;
            animations.push([[h], [6]]);
            animations.push([[h], [7]]);
        } else {
            l = mid + 1;
            animations.push([[l], [8]]);
            animations.push([[l], [9]]);
        }
    }
    return -1;
}
