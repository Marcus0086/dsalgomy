function linearSearch(
    array,
    key,
    animations
) {
    for (let i = 0; i < array.length; i++) {
        if (key === array[i]) {
            animations.push([[i], [3]]);
        }
        animations.push([[i], [1]]);
        animations.push([[i], [2]]);
    }
}

export function getLinearSearchAnimations(
    array,
    key
) {
    const animations = [];
    if (array.length <= 1) {
        return array;
    }
    linearSearch(array, key, animations);
    return animations;
}