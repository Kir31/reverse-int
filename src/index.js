module.exports = function reverse (n) {
    let x = Math.abs(n)
    return Number(x.toString().split('').reverse().join(''));        
}
