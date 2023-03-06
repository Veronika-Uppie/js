
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1



let num = localStorage.getItem('number') || 0;
let numberText = document.getElementById('number');

let newNumber = JSON.stringify((JSON.parse(num) +1));
numberText.innerText = newNumber;
localStorage.setItem('number', newNumber);
