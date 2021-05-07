function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

function shuffleArray(arr) {
    var i = arr.length;
    if (i == 0) return arr;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var a = arr[i];
        var b = arr[j];
        arr[i] = b;
        arr[j] = a;
    }
    return arr;
}

export { isTouchDevice, shuffleArray };