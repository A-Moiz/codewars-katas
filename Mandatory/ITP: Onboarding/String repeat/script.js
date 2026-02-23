function stringRepeat(n, s) {
    if (n < 0 || s.length < 0) return s;

    return s.repeat(n);
}

console.log(stringRepeat(2, 'a'));