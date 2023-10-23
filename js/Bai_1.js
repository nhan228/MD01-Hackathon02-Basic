var arr = [];
alert('Hãy nhập vào 5 số nguyên ');

for (let i = 1; i <= 5; i++) {
    var input = prompt(`Nhập số thứ ${i}`);
    arr.push(parseInt(input));
}

if (arr.length !== 5 || arr.some(isNaN)) {
    alert("Vui lòng nhập đúng 5 số nguyên.");
} else {
    var numbers = arr.slice();
    numbers.sort((a, b) => b - a);

    let uniqueMax = null;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
            uniqueMax = numbers[i];
            break;
        }
    }

    if (uniqueMax !== null) {
        alert("Số lớn nhất và duy nhất là: " + uniqueMax);
    } else {
        alert("Không có số lớn nhất và duy nhất trong danh sách.");
    }
}
