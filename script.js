console.log("hello")

const currencyFirst = document.querySelector('#currency-first');
const currencySecond = document.querySelector('#currency-second');
const amountFirst = document.querySelector('.amount-first');
const amountSecond = document.querySelector('.amount-second');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

let rate= []

const calc = () => {

}

const change = () => {
    let tempCurrency = currencyFirst.value;
    currencyFirst.value = currencySecond.value;
    currencySecond.value = tempCurrency;
    calc();
}

currencyFirst.addEventListener('change', calc);
currencySecond.addEventListener('change', calc);
amountFirst.addEventListener('input', calc);
swapBtn.addEventListener('click', change);

calc();




