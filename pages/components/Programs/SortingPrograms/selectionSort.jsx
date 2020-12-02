export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSort(array,animations);
    return animations;
}

function swap(val1, val2) {
    val1 = val1 + val2;
    val2 = val1 - val2;
    val1 = val1 - val2;
    return [val1, val2];
}

function selectionSort(
    array,
    animations
) {
    let i = 0,
        j = 0,
        min = 0;
    for (i = 0; i < array.length - 1; i++) {
        min = i;
        for (j = i + 1; j < array.length ; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        [array[min], array[i]] = swap(array[min], array[i]);
        animations.push([[min, i], [1]]);
        animations.push([[min, i], [2]]);
        animations.push([[[min, array[min]], [i, array[i]]], [3]]);
        animations.push([[i], [4]]);
    }
    animations.push([[i], [4]]);
}
