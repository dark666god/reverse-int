module.exports = function reverse (n) {
    function reverseInt(n) {
        const reversed = n.toString().split('').reverse().join('')
        return parseInt(reversed) * Math.sign(n)
      }
}
