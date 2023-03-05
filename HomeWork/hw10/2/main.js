
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1



let number = document.getElementById('number');
// number.innerText = "7";
//
//
// window.onload = function () {
//
//     localStorage.setItem('keyNumber',number.textContent);
//
//
//     let keyNumberValue = JSON.parse(localStorage.getItem('keyNumber'));
//
//     let newKeyNumberValueSt = JSON.stringify(keyNumberValue + 1);
//
//
//     localStorage.setItem('NewKeyNumber', newKeyNumberValueSt);
//     number.innerText = JSON.parse(newKeyNumberValueSt);
//
// }

localStorage.setItem('keyNumber', JSON.stringify(number));

let userJSON = localStorage.getItem('keyNumber');
console.log(userJSON);
let user = JSON.parse(userJSON);
console.log(user);
user += 1;
console.log(user);
localStorage.setItem('keyNumber', JSON.stringify(user))