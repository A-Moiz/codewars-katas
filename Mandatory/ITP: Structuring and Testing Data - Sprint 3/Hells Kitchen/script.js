function gordon(a) {
    return a.toUpperCase()
        .replace(/A/g, '@')
        .replace(/[EIOU]/g, '*')
        .split(' ')
        .map(word => word + '!!!!')
        .join(' ')
}

console.log(gordon("What the fuck damn cake"));