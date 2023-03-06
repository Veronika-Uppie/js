
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let num = localStorage.getItem('number') || 0;
let numberText = document.getElementById('number');

let newNumber = (+num +1).toString();
numberText.innerText = newNumber;
localStorage.setItem('number', newNumber);
