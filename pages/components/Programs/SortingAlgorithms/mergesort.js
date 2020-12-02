const mergeSortAlgo = [
    ["//Merge Sort"],
    ["\nfunction mergeSortHelper(\n    mainArray,\n    startIdx,\n    endIdx,\n    auxiliaryArray\n) {"],
    ["\n    if (startIdx === endIdx) return;\n    const middleIdx = Math.floor((startIdx + endIdx) / 2);"],
    ["\n    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);\n    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);"],
    ["\n    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);\n}"],
    ["\nfunction doMerge(\n    mainArray,\n    startIdx,\n    middleIdx,\n    endIdx,\n    auxiliaryArray"],
    ["\n) {\n    let k = startIdx;\n    let i = startIdx;\n    let j = middleIdx + 1;"],
    ["\n    while (i <= middleIdx && j <= endIdx) {\n        if (auxiliaryArray[i] <= auxiliaryArray[j]) {"],
    ["\n            mainArray[k++] = auxiliaryArray[i++];\n        } else {"],
    ["\n            mainArray[k++] = auxiliaryArray[j++];\n        }\n    }"],
    ["\n    while (i <= middleIdx) {\n        mainArray[k++] = auxiliaryArray[i++];\n    }"],
    ["\n    while (j <= endIdx) {\n        mainArray[k++] = auxiliaryArray[j++];\n    }\n}"],
];

let mergeSortFile = mergeSortAlgo.join(" ");
export default mergeSortFile;
