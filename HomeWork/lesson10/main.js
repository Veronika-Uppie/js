


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

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let page1 = document.getElementsByTagName('a')[0];
let page2 = document.getElementsByTagName('a')[1];


page1.onclick = function () {
    let sessionsArray = JSON.parse(localStorage.getItem('sessions')) || [];
    let currentdate = new Date();

    sessionsArray.push(currentdate);
    localStorage.setItem('sessions', JSON.stringify(sessionsArray));

};

page2.onclick = function () {
    let infoCurrentDate = document.createElement('div');
    let infoSessionsArray = JSON.parse(localStorage.getItem('sessions'));


    infoCurrentDate.innerText = JSON.stringify(infoSessionsArray);
    let info = document.getElementById('info');

    info.appendChild(infoCurrentDate);

};

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push({i})}

localStorage.setItem('array', JSON.stringify(arr));


let arrJSON = localStorage.getItem('array');
let arrPars =  JSON.parse(arrJSON);
console.log(arrPars);

let array = document.getElementById('arr');
// arr.innerText = JSON.stringify(array.value);



let but1 = document.getElementsByTagName('button')[0];
let but2 = document.getElementsByTagName('button')[1];

console.log(but1);

function funonload() {

    let i = 0;
    while (i < 10) {
        array.innerText = JSON.stringify(i);
        i++;
    }
    array.innerHTML = `${JSON.stringify(arr[0])} ${JSON.stringify(arr[1])} ${JSON.stringify(arr[2])}`
}
funonload();

