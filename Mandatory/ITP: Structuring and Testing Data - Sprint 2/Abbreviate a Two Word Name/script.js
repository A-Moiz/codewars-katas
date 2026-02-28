function abbreviateName(name) {
    let userName = name.split(' ');
    let initialOne = userName[0][0];
    let initialTwo = userName[1][0];
    return `${initialOne}.${initialTwo}`;
}

console.log(abbreviateName("Abdul Moiz"));