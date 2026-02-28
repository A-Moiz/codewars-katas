function filterForNumber(value) {
    // /\D/g => '/expression to check/'
    // /D => Means any character that is NOT  a digit
    // g => global flag
    return Number(value.replace(/\D/g, ''));
}

filterForNumber("a1b2c3");