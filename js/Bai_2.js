function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

var input = prompt('Nhập vào một chuỗi chữ số nguyên (ngăn cách nhau bằng dấu cách) : ');
var sumPrime = 0;

var inputArr = input.split(" ")
for (var i = 0; i < inputArr.length; i++) {
    var digit = parseInt(inputArr[i], 10);
    if (!isNaN(digit) && digit >= 0 && isPrime(digit)) {
        sumPrime += digit;
    }
}

alert("Tổng các số nguyên tố trong chuỗi vừa nhập là: " + sumPrime);