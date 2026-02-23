function oppositesAttract(petal1, petal2) {
    let firstPetalTrue = petal1 % 2 === 0;
    let secondPetalTrue = petal2 % 2 === 0;

    if ((firstPetalTrue && !secondPetalTrue) || (!firstPetalTrue && secondPetalTrue)) return true; else return false;
}

console.log(oppositesAttract(2, 7));