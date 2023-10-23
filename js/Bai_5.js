var inputString = prompt("Nhập vào một chuỗi cần đảo ngược: ");

var word = inputString.split(" ");
var reverseWord = word.map(word => {
    return word.split('').reverse().join('');
});

var reverseString = reverseWord.join(' ');
alert('Đây là chuỗi khi đã được đảo ngược: ' +'"' + reverseString + '"');