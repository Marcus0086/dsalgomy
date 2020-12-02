const quickSortAlgo = [
    ["//Quick Sort"],
    ["\nfunction quickSortHelper(\n    mainArray,\n    startIdx,\n    endIdx\n) {\n    if (startIdx < endIdx) {"],
    ["\n        const pi = doPart(mainArray, startIdx, endIdx);\n        quickSortHelper(mainArray, startIdx, pi - 1);"],
    ["\n        quickSortHelper(mainArray, pi + 1, endIdx);\n    }\n}"],
    ["\nfunction doPart(\n    mainArray,\n    startIdx,\n    endIdx\n) {"],
    ["\n    let pivot = mainArray[endIdx];\n    let i = (startIdx - 1);\n    for (let j = startIdx; j < endIdx; j++) {"],
    ["\n        if (mainArray[j] < pivot) {\n            i++;\n            let temp = mainArray[i];\n            mainArray[i] = mainArray[j];"],
    ["\n            mainArray[j] = temp;\n        }\n    }\n    let temp = mainArray[i + 1];"],
    ["\n    mainArray[i + 1] = mainArray[endIdx];\n    mainArray[endIdx] = temp;\n    return i + 1;\n}"],
];

const quickSortFile = quickSortAlgo.join(" ");
export default quickSortFile;