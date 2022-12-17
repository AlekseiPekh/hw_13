const firstValue = document.getElementById('first_value');
const operatorValue = document.getElementById('operator');
const secondValue = document.getElementById('second_value');
const resCalc = document.getElementById('res_calc');

function calc() {
    const firstV = +firstValue.value;
    const secondV = +secondValue.value;
    let resC = 0;
    switch (operatorValue.value) {
        case '+':
            resC = firstV + secondV;
            resCalc.textContent = resC;
            break;

        case '-':
            resC = firstV - secondV;
            resCalc.textContent = resC;
            break;
        case '*':
            resC = firstV * secondV;
            resCalc.textContent = resC;
            break;
        case '/':
            resC = firstV / secondV;
            resCalc.textContent = resC;
            break;
    }
}

function isNumber(x) {
    if (x === '') {
        return false;
    }
    const numX = +x;
    if (isNaN(numX)) {
        return false;
    } else {
        return true;
    }
}

const iItem = document.getElementById('item_input');
const addI = document.getElementById('add_item');
const arrR = document.getElementById('array_result');

const arr = []

function addItem() {
    if (isNumber(item_input.value)) {
        arr.push(item_input.value);
        sum_item.textContent = Number(sum_item.textContent) + Number(item_input.value);
        array_result.textContent = JSON.stringify(arr);
    } else {
        alert('no number');
    }
}

const number_input = document.getElementById('number_input');
const reverse_result = document.getElementById('reverse_result');

function reverseNumber() {
    if (number_input.value<0){
        alert('I did that too :D');
        return;
    }
    if (isNumber(number_input.value)) {
        let reverse = 0;
        let num = number_input.value;
        let lastDigit;
        while(num !== 0){
            lastDigit = num % 10;
            reverse = reverse * 10 + lastDigit;
            num = Math.floor(num/10);
        }
        reverse_result.textContent = reverse;
    } else {
        alert('no number');
    }
}


