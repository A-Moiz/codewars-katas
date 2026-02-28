function buildString(...template){
    return `I like ${template.join(',')}!`;
}

console.log(buildString("One Piece, Black Clover, Hells Paradise"));