import React, { Component } from "react";
import { getMergeSortAnimations } from './Programs/SortingPrograms/newmergesort';
import { getBubbleSortAnimations } from './Programs/SortingPrograms/bubbleSort';
import { getInsertionSortAnimations } from './Programs/SortingPrograms/insertionSort';
import { getSelectionSortAnimations } from './Programs/SortingPrograms/selectionSort';
import { getQuickSortAnimations } from './Programs/SortingPrograms/quickSort';
import { getBinarySearchAnimations } from './Programs/SearchingPrograms/binarysearch';
import { getLinearSearchAnimations } from './Programs/SearchingPrograms/linearSearch';
import bubblesortTxt from './Programs/SortingAlgorithms/bubbleSort';
import selectionsortTxt from './Programs/SortingAlgorithms/selectionSort';
import quicksortTxt from './Programs/SortingAlgorithms/quickSort';
import mergesortTxt from './Programs/SortingAlgorithms/mergesort';
import insertionsortTxt from './Programs/SortingAlgorithms/insertionSort';
import linearsearchTxt from './Programs/SearchingAlgorithms/linearSearch';
//import binarySearchTxt from './Programs/SearchingAlgorithms/binarySearch';

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
        const animations = getBubbleSortAnimations(this.state.array);
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
        const animations = getInsertionSortAnimations(this.state.array);
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
        const animations = getSelectionSortAnimations(this.state.array);
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
        const animations = getMergeSortAnimations(this.state.array);
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
        const animations = getQuickSortAnimations(this.state.array);
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
        const animations = getBinarySearchAnimations(this.state.array, this.state.array[key]);
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
        const animations = getLinearSearchAnimations(this.state.array, this.state.array[key]);
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
                sortAlgo = mergesortTxt;
                this.setState({ header: header });
                this.setState({ disabled: disabled });
                this.setState({ sortAlgo: sortAlgo });
                return this.mergeSort();
            } else if (mp[val] === "Bubble Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = bubblesortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.bubbleSort();
            } else if (mp[val] === "Insertion Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = insertionsortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.insertionSort();
            } else if (mp[val] === "Quick Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = quicksortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.quickSort();
            } else if (mp[val] === "Selection Sort") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = selectionsortTxt;
                this.setState({ header: header });
                this.setState({ sortAlgo: sortAlgo });
                this.setState({ disabled: disabled });
                return this.selectionSort();
            } else if (mp[val] === "Linear Search") {
                //document.getElementById("name").innerHTML = name;
                disabled = true;
                sortAlgo = linearsearchTxt;
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