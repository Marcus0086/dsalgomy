import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Button } from 'react-bootstrap';
import styles from '../_styles/sortingVisualizer.module.css';
let ANIMATION_SPEED_MS = 50;
const PRIMARY_COLOR = 'orange';
const SECONDARY_COLOR = 'yellow';
let anim = 0;
class Sorting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            key: 0,
            speed: 0,
            disabled: false,
            sortAlgo: "",
            header: "",
            listitems: [
                {
                    id: 0,
                    context: "Linked-List",
                    modifier: "list-group-item list-group-item-primary",
                    path: "/linkedList",
                    //component: LinkedList,
                    caption: "Lorem ipsum nisi aliquip reprehenderit proident proident ut dolor ut sint.",
                },
                {
                    id: 1,
                    context: "Arrays",
                    modifier: "list-group-item list-group-item-secondary",
                    path: "/arrays",
                    //component: Arrays,
                    caption: "Lorem ipsum nisi aliquip reprehenderit proident proident ut dolor ut sint.",
                },
                {
                    id: 2,
                    context: "Stacks and Queues",
                    modifier: "list-group-item list-group-item-success",
                    path: "/stacks",
                    //component: StacksQueues,
                    caption: "Lorem ipsum nisi aliquip reprehenderit proident proident ut dolor ut sint.",
                },
                {
                    id: 3,
                    context: "Trees",
                    modifier: "list-group-item list-group-item-danger",
                    path: "/trees",
                    //component: Trees,
                    caption: "Lorem ipsum nisi aliquip reprehenderit proident proident ut dolor ut sint.",
                },
                {
                    id: 4,
                    context: "Graphs",
                    modifier: "list-group-item list-group-item-warning",
                    path: "/graphs",
                    //component: Graphs,
                    caption: "Lorem ipsum nisi aliquip reprehenderit proident proident ut dolor ut sint.",
                }
            ],
            bubblesortTxt: [
                ["//Bubble Sort"],
                ["\nfunction swap(val1, val2) {\n    val1 = val1 + val2;\n    val2 = val1 - val2;\n    val1 = val1 - val2;\n    return [val1, val2];\n}"],
                ["\nfunction bubbleSort(\n    array\n) {\n    let i = 0,\n        j = 0;\n    let n = array.length;"],
                ["\n    for (i = 0; i < n - 1; i++) {\n        for (j = 0; j < n - i - 1; j++) {\n            if (array[j] > array[j + 1]) {"],
                ["\n                [array[j], array[j + 1]] = swap(array[j], array[j + 1]);\n            }\n        }\n    }\n}"],
            ],

            insertionsortTxt: [
                ["//Insertion Sort"],
                ["\nfunction insertionSort(\n    array\n) {\n    let i = 0,\n        j = 0,\n        x = 0;\n    for (i = 1; i < array.length; i++) {"],
                ["\n        j = i - 1;\n        x = array[i];\n        while (j > -1 && array[j] > x) {\n            array[j + 1] = array[j];"],
                ["\n            j--;\n        }\n        array[j + 1] = x;\n    }\n}"],
            ],

            mergesortTxt: [
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
            ],

            quicksortTxt: [
                ["//Quick Sort"],
                ["\nfunction quickSortHelper(\n    mainArray,\n    startIdx,\n    endIdx\n) {\n    if (startIdx < endIdx) {"],
                ["\n        const pi = doPart(mainArray, startIdx, endIdx);\n        quickSortHelper(mainArray, startIdx, pi - 1);"],
                ["\n        quickSortHelper(mainArray, pi + 1, endIdx);\n    }\n}"],
                ["\nfunction doPart(\n    mainArray,\n    startIdx,\n    endIdx\n) {"],
                ["\n    let pivot = mainArray[endIdx];\n    let i = (startIdx - 1);\n    for (let j = startIdx; j < endIdx; j++) {"],
                ["\n        if (mainArray[j] < pivot) {\n            i++;\n            let temp = mainArray[i];\n            mainArray[i] = mainArray[j];"],
                ["\n            mainArray[j] = temp;\n        }\n    }\n    let temp = mainArray[i + 1];"],
                ["\n    mainArray[i + 1] = mainArray[endIdx];\n    mainArray[endIdx] = temp;\n    return i + 1;\n}"],
            ],

            selectionsortTxt: [
                ["//Selection Sort"],
                ["\nfunction swap(val1, val2) {\n    val1 = val1 + val2;\n    val2 = val1 - val2;\n    val1 = val1 - val2;\n    return [val1, val2];\n}"],
                ["\nfunction selectionSort(\n    array\n) {\n    let i = 0,\n        j = 0,\n        min = 0;\n    for (i = 0; i < array.length - 1; i++) {"],
                ["\n        min = i;\n        for (j = i + 1; j < array.length; j++) {\n            if (array[j] < array[min]) {"],
                ["\n                min = j;\n            }\n        }\n        [array[min], array[i]] = swap(array[min], array[i]);"],
                ["    }\n}"],
            ],

            linearsearchTxt: [
                ["//Linear Search"],
                ["\nfunction linearSearch(\n    array,\n    key\n) {\n    for (let i = 0; i < array.length; i++) {"],
                ["\n        if (key === array[i]) {\n            return i;\n        }\n    }\n}"],
            ],

            binarysearchTxt: [
                ["//Binary Search"],
                ["\nfunction binarySearch(\n    arr,\n    key\n) {\n    arr = arr.sort((a, b) => (a - b));\n    let l = 0,"],
                ["\n        h = arr.length,\n        mid = 0;\n    while (l <= h) {\n        mid = Math.floor((l + h) / 2);"],
                ["\n        if (key === arr[mid]) {\n            return mid;\n        }\n        if (key < arr[mid]) {"],
                ["\n            h = mid - 1;\n        } else {\n            l = mid + 1;\n        }\n    }\n    return -1;\n}"],
            ],
        };
    }

    componentDidMount = () => {
        //const mybtn = document.getElementById("myBtn");
        this.resetArray();
        window.requestAnimationFrame(() => { this.randAlgo() });
        //window.onscroll = () => {
        //    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //        mybtn.style.display = "block";
        //    } else {
        //        mybtn.style.display = "none";
        //    }
        //}
    }

    randomIntFromFunction = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    resetArray = () => {
        const array = [];
        for (let i = 0; i < 70; i++) {
            let x = this.randomIntFromFunction(50, 400);
            let y = (x / 20);
            array.push(y);
        }

        this.setState({ array: array });
    }

    swap = (val1, val2) => {
        val1 = val1 + val2;
        val2 = val1 - val2;
        val1 = val1 - val2;
        return [val1, val2];
    }

    bubbleSortHelper = (
        array,
        animations
    ) => {
        let i = 0,
            j = 0;
        let n = array.length;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = this.swap(array[j], array[j + 1]);
                    animations.push([[j, j + 1], [1]]);
                    animations.push([[j, j + 1], [2]]);
                    animations.push([[[j, array[j]], [j + 1, array[j + 1]]], [3]]);
                }
            }
            animations.push([[j], [4]]);
        }
        animations.push([[0], [4]]);
    }

    getBubbleSortAnimations = array => {
        const animations = [];
        if (array.length <= 1) return array;
        this.bubbleSortHelper(array, animations);
        return animations;
    }

    insertionSortHelper = (
        array,
        animations,
    ) => {
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

    getInsertionSortAnimations = array => {
        const animations = [];
        if (array.length < 1) {
            return array;
        }
        this.insertionSortHelper(array, animations);
        return animations;
    }

    doMerge = (
        mainArray,
        startIdx,
        middleIdx,
        endIdx,
        auxiliaryArray,
        animations,
    ) => {
        let k = startIdx;
        let i = startIdx;
        let j = middleIdx + 1;
        while (i <= middleIdx && j <= endIdx) {
            animations.push([i, j]);
            animations.push([i, j]);
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
                animations.push([k, auxiliaryArray[i]]);
                mainArray[k++] = auxiliaryArray[i++];
            } else {
                animations.push([k, auxiliaryArray[j]]);
                mainArray[k++] = auxiliaryArray[j++];
            }
        }
        while (i <= middleIdx) {
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        while (j <= endIdx) {
            animations.push([j, j]);
            animations.push([j, j]);
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    mergeSortHelper = (
        mainArray,
        startIdx,
        endIdx,
        auxiliaryArray,
        animations,
    ) => {
        if (startIdx === endIdx) return;
        const middleIdx = Math.floor((startIdx + endIdx) / 2);
        this.mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
        this.mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
        this.doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
    }

    getMergeSortAnimations = array => {
        const animations = [];
        if (array.length <= 1) return array;
        const auxiliaryArray = array.slice();
        this.mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
        return animations;
    }

    doPart = (
        mainArray,
        startIdx,
        endIdx,
        animations,
    ) => {

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

    quickSortHelper = (
        mainArray,
        startIdx,
        endIdx,
        animations,
    ) => {
        if (startIdx < endIdx) {
            const pi = this.doPart(mainArray, startIdx, endIdx, animations);
            this.quickSortHelper(mainArray, startIdx, pi - 1, animations);
            this.quickSortHelper(mainArray, pi + 1, endIdx, animations);
        }
    }

    getQuickSortAnimations = array => {
        const animations = [];
        if (array.length <= 1) return array;
        this.quickSortHelper(array, 0, array.length - 1, animations);
        return animations;
    }

    selectionSortHelper = (
        array,
        animations
    ) => {
        let i = 0,
            j = 0,
            min = 0;
        for (i = 0; i < array.length - 1; i++) {
            min = i;
            for (j = i + 1; j < array.length; j++) {
                if (array[j] < array[min]) {
                    min = j;
                }
            }
            [array[min], array[i]] = this.swap(array[min], array[i]);
            animations.push([[min, i], [1]]);
            animations.push([[min, i], [2]]);
            animations.push([[[min, array[min]], [i, array[i]]], [3]]);
            animations.push([[i], [4]]);
        }
        animations.push([[i], [4]]);
    }

    getSelectionSortAnimations = array => {
        const animations = [];
        if (array.length <= 1) return array;
        this.selectionSortHelper(array, animations);
        return animations;
    }

    linearSearchHelper = (
        array,
        key,
        animations
    ) => {
        for (let i = 0; i < array.length; i++) {
            if (key === array[i]) {
                animations.push([[i], [3]]);
            }
            animations.push([[i], [1]]);
            animations.push([[i], [2]]);
        }
    }

    getLinearSearchAnimations(
        array,
        key
    ) {
        const animations = [];
        if (array.length <= 1) {
            return array;
        }
        this.linearSearchHelper(array, key, animations);
        return animations;
    }

    binarySearchHelper = (
        arr,
        key,
        animations
    ) => {
        arr = arr.sort((a, b) => (a - b));
        let l = 0,
            h = arr.length,
            mid = 0;
        animations.push([[l, h - 1], [3]]);
        animations.push([[l, h - 1], [11]]);
        while (l <= h) {
            mid = Math.floor((l + h) / 2);
            animations.push([[mid], [4]]);
            animations.push([[mid], [5]]);
            if (key === arr[mid]) {
                animations.push([[mid], [10]]);
                return mid;
            }
            if (key < arr[mid]) {
                h = mid - 1;
                animations.push([[h], [6]]);
                animations.push([[h], [7]]);
            } else {
                l = mid + 1;
                animations.push([[l], [8]]);
                animations.push([[l], [9]]);
            }
        }
        return -1;
    }

    getBinarySearchAnimations(array, key) {
        const animations = [];
        if (array.length <= 1) {
            return array;
        }
        this.binarySearchHelper(array, key, animations);
        return animations;
    } 
    //yo
    bubbleSort = () => {
        let disabled = false;
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }
        const animations = this.getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            anim = i * ANIMATION_SPEED_MS;
            const [, [idx]] = animations[i];
            const arrayBars = document.getElementsByClassName(styles.arrayBar);
            if (idx === 1) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 2) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 3) {
                const [[[barOneIdx, oneHeight], [barTwoIdx, twoHeight]],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${oneHeight}vw`;
                    barTwoStyle.height = `${twoHeight}vw`;
                }, i * (ANIMATION_SPEED_MS));
                continue;
            }
            if (idx === 4) {
                const [[barOneIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    insertionSort = () => {
        let disabled = false;
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }
        const animations = this.getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const [, [idx]] = animations[i];
            const arrayBars = document.getElementsByClassName(styles.arrayBar);
            if (idx === 1) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 2) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 3) {
                const [[barOneIdx, newHeight],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}vw`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    selectionSort = () => {
        let disabled = false;
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }
        const animations = this.getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const [, [idx]] = animations[i];
            const arrayBars = document.getElementsByClassName(styles.arrayBar);
            if (idx === 1) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 2) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 3) {
                const [[[barOneIdx, oneHeight], [barTwoIdx, twoHeight]],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${oneHeight}vw`;
                    barTwoStyle.height = `${twoHeight}vw`;
                }, i * (ANIMATION_SPEED_MS));
                continue;
            }
            if (idx === 4) {
                const [[barOneIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    mergeSort = () => {
        let disabled = false;
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }
        const animations = this.getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            anim = i * ANIMATION_SPEED_MS;
            const arrayBars = document.getElementsByClassName(styles.arrayBar);
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}vw`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    quickSort = () => {
        let disabled = false;
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }
        const animations = this.getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; ++i) {
            anim = i * ANIMATION_SPEED_MS;
            const [, [idx]] = animations[i];
            const arrayBars = document.getElementsByClassName(styles.arrayBar);
            if (idx === 1) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 2) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
                continue;
            }
            if (idx === 3) {
                const [[[barOneIdx, oneHeight], [barTwoIdx, twoHeight]],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${oneHeight}vw`;
                    barTwoStyle.height = `${twoHeight}vw`;
                }, i * (ANIMATION_SPEED_MS));
                continue;
            }
            if (idx === 4) {
                const [[barOneIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);

    }

    binarySearch = () => {
        let disabled = false;
        let spd = 500;
        const HIGH_COLOR = "tomato";
        const LOW_COLOR = "yellow";
        const MID_COLOR = "purple";
        const KEY_COLOR = "#DAAD86";
        let keyFound = false;
        //document.getElementById("h3").innerHTML = "Low Color:" + LOW_COLOR + ", High Color:" + HIGH_COLOR + ", Mid Color:" + MID_COLOR + ", Key Color:" + KEY_COLOR;
        //document.getElementById("keyF").innerHTML = "Key found:" + keyFound;
        const array = this.state.array.sort((a, b) => (a - b));
        this.setState({ array: array });
        const key = Math.floor(Math.random() * this.state.array.length);
        const animations = this.getBinarySearchAnimations(this.state.array, this.state.array[key]);
        for (let i = 0; i < animations.length; i++) {
            anim = i * spd;
            const [, [idx]] = animations[i];
            const arraybars = document.getElementsByClassName(styles.arrayBar);
            if (idx === 3) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arraybars[barOneIdx].style;
                const barTwoStyle = arraybars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = LOW_COLOR;
                    barTwoStyle.backgroundColor = HIGH_COLOR;
                }, i * spd);
            }

            if (idx === 11) {
                const [[barOneIdx, barTwoIdx],] = animations[i];
                const barOneStyle = arraybars[barOneIdx].style;
                const barTwoStyle = arraybars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * spd);
            }

            if (idx === 4) {
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = MID_COLOR;
                }, i * spd);
            }

            if (idx === 5) {
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = PRIMARY_COLOR;
                }, i * spd);
            }

            if (idx === 6) {
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = HIGH_COLOR;
                }, i * spd);
            }

            if (idx === 7) {
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = PRIMARY_COLOR;
                }, i * spd);
            }

            if (idx === 8) {
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = LOW_COLOR;
                }, i * spd);
            }

            if (idx === 9) {
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = PRIMARY_COLOR;
                }, i * spd);
            }

            if (idx === 10) {
                keyFound = true;
                const keyF = keyFound;
                const [[barOneIdx],] = animations[i];
                const barOnseStyle = arraybars[barOneIdx].style;
                setTimeout(() => {
                    barOnseStyle.backgroundColor = KEY_COLOR;
                    //document.getElementById("keyF").innerHTML = "Key found:" + keyF;
                }, i * spd);
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    linearSearch = () => {
        let keyFound = false;
        let disabled = false;
        let spd = 200;
        const KEY_COLOR = "#DAAD86";
        const key = Math.floor(Math.random() * this.state.array.length);
        //document.getElementById("h3").innerHTML = "Key Color:" + KEY_COLOR;
        const animations = this.getLinearSearchAnimations(this.state.array, this.state.array[key]);
        //document.getElementById("keyF").innerHTML = "Key found:" + keyFound;
        for (let i = 0; i < animations.length; i++) {
            anim = i * spd;
            const [, [idx]] = animations[i];
            const arrayBars = document.getElementsByClassName(styles.arrayBar);
            if (idx === 1) {
                const [[barOneIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                }, i * spd);
            }

            if (idx === 2) {
                const [[barOneIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                }, i * spd);
            }

            if (idx === 3) {
                keyFound = true;
                let keyF = keyFound;
                const [[barOneIdx],] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = KEY_COLOR;
                    //document.getElementById("keyF").innerHTML = "Key found:" + keyF;
                }, i * spd);
                break;
            }
        }
        setTimeout(function () { this.setState({ disabled: disabled }) }.bind(this), anim);
    }

    getAnimSpeed = anim => {
        if (this.isSorted(this.state.array)) {
            setTimeout(function () {
                confirmAlert({
                    title: 'Sorting Done',
                    message: 'Want to reset array?',
                    buttons: [
                        {
                            label: 'Yes',
                            onClick: () => {
                                window.location.reload();
                            }
                        },
                        {
                            label: 'No',
                        }
                    ]
                });
            }, anim);
        }
    }

    randAlgo = () => {
        if (this.isSorted(this.state.array)) {
            confirmAlert({
                title: "Already Sorted!",
                message: "Want to reset?",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            window.location.reload();
                        }
                    },
                    {
                        label: 'No',
                    }
                ]
            });
            return;
        }

        let mp = ["Merge Sort", "Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort", "Linear Search"];
        let val = this.randomIntFromFunction(0, 5);
        mp = mp.sort(() => Math.random() - 0.5);
        let header = mp[val];
        let disabled = false;
        let sortAlgo = "";
        if (mp[val] === "Merge Sort" || mp[val] === "Bubble Sort" || mp[val] === "Insertion Sort" || mp[val] === "Quick Sort" || mp[val] === "Selection Sort"|| mp[val] === "Linear Search") {
            if (mp[val] === "Merge Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = this.state.mergesortTxt;
                this.setState({ header: header });
                this.setState({ disabled: disabled });
                this.setState({ sortAlgo: sortAlgo });
                return this.mergeSort();
            } else if (mp[val] === "Bubble Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = this.state.bubblesortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.bubbleSort();
            } else if (mp[val] === "Insertion Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = this.state.insertionsortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.insertionSort();
            } else if (mp[val] === "Quick Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = this.state.quicksortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.quickSort();
            } else if (mp[val] === "Selection Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = this.state.selectionsortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.selectionSort();
            } else if (mp[val] === "Linear Search") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = this.state.linearsearchTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.linearSearch();
            }
        }

    }

    isSorted = array => {
        if (JSON.stringify(array) === JSON.stringify(array.slice().sort((a, b) => a - b))) {
            return true;
        }
        return false;
    }

    getRange = () => {
        ANIMATION_SPEED_MS = document.getElementById("speed").value;
        let speed = "Speed:" + ANIMATION_SPEED_MS.toString() + "ms";
        document.getElementById("animSpeed").innerHTML = speed;
    }

    render = () => {
        const { array } = this.state;
        return (
            <div>
                <div className={"mx-auto " + styles.boxMain}>
                    <Button className={"d-inline-block mx-auto " + styles.arrayContainer} variant="" disabled={this.state.disabled} >
                        {this.state.header && <h3 id="name" style={{
                            position: "relative",
                            fontSize: '2vw',
                            color: "white",
                        }}>{this.state.header}
                        </h3>}

                        {array.map((value, idx) => (
                            <div
                                className={styles.arrayBar}
                                key={idx}
                                style={{
                                    height: `${value}vw`,
                                }}>
                                {value}
                            </div>

                        ))}
                    </Button>
                </div>
            </div>
            
        );
    }
}

export default Sorting;