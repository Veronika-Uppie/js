// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let containerDiv = document.getElementsByClassName('container')[0];

console.log(containerDiv);

let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push({i})}
console.log( arr);




















// for (let obj of arr) {
//     let objBlock = document.createElement('div');
//     let text = document.createElement('p');
//     text.innerText = JSON.stringify(obj);
//
//     let currobjs = JSON.parse(localStorage.getItem('currentArr' || []));
//     if (obj.i >= 0 && obj.i <= 9) {
//         objBlock.appendChild(text);
//         containerDiv.appendChild(objBlock);
//         currobjs.push(obj);
//
//
//
//     }
//     localStorage.setItem('currentArr', JSON.stringify(obj) )
// }
// // let butprev = document.getElementsByTagName('button')[0];
// let butnext = document.getElementsByTagName('button')[1];
//
// // if (!!localStorage.getItem('currentArr') || ){
// //     for (let i = 0; i < 10; i++) {
// //
// //     }
// // }
//
// butnext.onclick = function () {
//     let currobjs = JSON.parse(localStorage.getItem('currentArr' || []));
//     if  (currobjs.includes({i: 0})) {
//
//     }
//
//     currobjs.push()
// }


