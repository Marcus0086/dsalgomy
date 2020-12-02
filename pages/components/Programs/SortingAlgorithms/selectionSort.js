const selectionSortAlgo = [
    ["//Selection Sort"],
    ["\nfunction swap(val1, val2) {\n    val1 = val1 + val2;\n    val2 = val1 - val2;\n    val1 = val1 - val2;\n    return [val1, val2];\n}"],
    ["\nfunction selectionSort(\n    array\n) {\n    let i = 0,\n        j = 0,\n        min = 0;\n    for (i = 0; i < array.length - 1; i++) {"],
    ["\n        min = i;\n        for (j = i + 1; j < array.length; j++) {\n            if (array[j] < array[min]) {"],
    ["\n                min = j;\n            }\n        }\n        [array[min], array[i]] = swap(array[min], array[i]);"],
    ["    }\n}"],
];

const selectionSortFile = selectionSortAlgo.join(" ");
export default selectionSortFile;