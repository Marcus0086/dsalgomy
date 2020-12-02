const insertionSortAlgo = [
    ["//Insertion Sort"],
    ["\nfunction insertionSort(\n    array\n) {\n    let i = 0,\n        j = 0,\n        x = 0;\n    for (i = 1; i < array.length; i++) {"],
    ["\n        j = i - 1;\n        x = array[i];\n        while (j > -1 && array[j] > x) {\n            array[j + 1] = array[j];"],
    ["\n            j--;\n        }\n        array[j + 1] = x;\n    }\n}"],
];


const insertionSortFile = insertionSortAlgo.join(" ");

export default insertionSortFile;

