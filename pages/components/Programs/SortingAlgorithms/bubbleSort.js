const bubbleSortAlgo = [
    ["//Bubble Sort"],
    ["\nfunction swap(val1, val2) {\n    val1 = val1 + val2;\n    val2 = val1 - val2;\n    val1 = val1 - val2;\n    return [val1, val2];\n}"],
    ["\nfunction bubbleSort(\n    array\n) {\n    let i = 0,\n        j = 0;\n    let n = array.length;"],
    ["\n    for (i = 0; i < n - 1; i++) {\n        for (j = 0; j < n - i - 1; j++) {\n            if (array[j] > array[j + 1]) {"],
    ["\n                [array[j], array[j + 1]] = swap(array[j], array[j + 1]);\n            }\n        }\n    }\n}"],
];

const bubbleSortFile = bubbleSortAlgo.join(" ");
export default bubbleSortFile;