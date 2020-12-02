const linearSearchAlgo = [
    ["//Linear Search"],
    ["\nfunction linearSearch(\n    array,\n    key\n) {\n    for (let i = 0; i < array.length; i++) {"],
    ["\n        if (key === array[i]) {\n            return i;\n        }\n    }\n}"],
];

const linearSearchFile = linearSearchAlgo.join(" ");
export default linearSearchFile;