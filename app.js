var ArrowFunc = function (arr) {
    return arr.map(element => String.fromCharCode(element)).join('');
}

console.log(ArrowFunc([84, 101, 115, 116])); // 'Test'
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72])); // 'Test'