function swap(val1, val2) {
    val1 = val1 + val2;
    val2 = val1 - val2;
    val1 = val1 - val2;
    return [val1, val2];
}

function bubbleSort(
    array,
    animations
) {
    let i = 0,
        j = 0;
    let n = array.length;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = swap(array[j], array[j + 1]);
                animations.push([[j, j + 1], [1]]);
                animations.push([[j, j + 1], [2]]);
                animations.push([[[j, array[j]], [j + 1, array[j + 1]]], [3]]);
            }
        }
        animations.push([[j], [4]]);
    }
    animations.push([[0], [4]]);
}

export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
}


