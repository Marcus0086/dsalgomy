 export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length < 1) {
        return array;
    }
    insertionSort(array, animations);
    return animations;
}

function insertionSort(
    array,
    animations,
) {
    let i = 0,
        j = 0,
        x = 0;
    for (i = 1; i < array.length; i++) {
        j = i - 1;
        x = array[i];
        while (j > -1 && array[j] > x) {
            array[j + 1] = array[j];
            animations.push([[j, j + 1], [1]]);
            animations.push([[j, j + 1], [2]]);
            animations.push([[j + 1, array[j]], [3]]);
            j--;
        }
        array[j + 1] = x;
        animations.push([[j + 1, x], [3]]);
    }
}

