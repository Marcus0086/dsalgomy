export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    animations,
) {
    if (startIdx < endIdx) {
        const pi = doPart(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pi - 1, animations);
        quickSortHelper(mainArray, pi + 1, endIdx, animations);
    }
}

function doPart(
    mainArray,
    startIdx,
    endIdx,
    animations,
) {

    let pivot = mainArray[endIdx];
    let i = (startIdx - 1);
    for (let j = startIdx; j < endIdx; j++) {
        if (mainArray[j] < pivot) {
            i++;
            let temp = mainArray[i];
            mainArray[i] = mainArray[j];
            mainArray[j] = temp;
            animations.push([[i, j], [1]]);
            animations.push([[i, j], [2]]);
            animations.push([[[i, mainArray[i]], [j, mainArray[j]]], [3]]);
        }
    }
    let temp = mainArray[i + 1];
    mainArray[i + 1] = mainArray[endIdx];
    mainArray[endIdx] = temp;
    animations.push([[i + 1, endIdx], [1]]);
    animations.push([[i + 1, endIdx], [2]]);
    animations.push([[[i + 1, mainArray[i + 1]], [endIdx, mainArray[endIdx]]], [3]]);
    return i + 1;
}