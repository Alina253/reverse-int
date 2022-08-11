module.exports = function reverse (n) {
    let array = [n];
    
 return array.toString().split('').reverse().slice(0, 3).join('');
}
