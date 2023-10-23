function removeNum(inputString) {
    var result = '';
    for (var i = 0; i < inputString.length; i++) {
        if (!isNaN(inputString[i]) || inputString[i] === '-') {
            continue;
        }
        result += inputString[i];
    }
    return result;
}

var input = prompt("Nhập vào một chuỗi ký tự (bao gồm chữ và số đều được):");
var result = removeNum(input);

alert('Đây là kết quả sau khi xóa hết số trong chuỗi vừa nhập: ' + '"' + result + '"');
