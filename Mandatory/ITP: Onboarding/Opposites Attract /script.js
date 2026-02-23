function oppositesAttract(petal1, petal2) {
    try {
        if (petal1 <= 0 || petal2 <= 0) throw new Error("Petals must be greater than 0");

        let firstPetalTrue = petal1 % 2 === 0;
        let secondPetalTrue = petal2 % 2 === 0;
        return firstPetalTrue !== secondPetalTrue;
    } catch {
        return "Petals must be greater than 0";
    }
}

console.log(oppositesAttract(4, 7));