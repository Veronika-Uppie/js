// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>Цикл for: текст</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Цикл for: текст і індекс ${i} </div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<div>Цикл while: текст </div>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while (j < 20) {
    document.write(`<div>Цикл while: текст і індекс  ${j} </div>`);
    j++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (const listOfItem of listOfItems) {
    document.write(`<ul> <li>${listOfItem}</li> </ul>`);
    }

// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    document.write(`
        <div class="product-card">
            <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
            <img src="${product.image}" alt="${product.title}" class="product-image">
        </div>
    `);
}


// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('Користувачі зі статусом true: ')
for (let user of users) {
    let status = user.status;
    if (status === true) {
        document.write(`<div>${user.name}</div>`);}
  }

document.write('Користувачі зі статусом false: ')
for (let user of users) {
    let status = user.status;
    if (status === false) {
        document.write(`<div>${user.name}</div>`);}
}

document.write('Користувачі які старші за 30 років: ')
for (let user of users) {
    let age = user.age;
    if (age > 30) {
        document.write(`<div>${user.name}</div>`);}
}

// additional1.txt ________________________________________________________________________________
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
 let arr1 = [1, 2, 3, 4, 5, 'q', 'w', 'e', 'r', 't', 'a', 'a', 6, true, false ];
console.log(arr1)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr2 = [];
arr2[0] = 123;
arr2[1] = 'qww';
arr2[2] = false;
arr2[3] = true;
console.log(arr2)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr3 = [2,17,13,6,22,31,45,66,100,-18];

console.log('цикл while');
let k = 0;
while (k < arr3.length) {
    console.log(arr3[k]);
    k++;
}


console.log('цикл for');
for (let y = 0; y < arr3.length; y++) {
    console.log(arr3[y]);
}


console.log('цикл while, числа тільки з непарним індексом');
let e = 0;
while (e < arr3.length) {
    if (e%2 !== 0) {
        console.log(arr3[e]);
    }
    e++;
}

console.log('цикл for, числа тільки з непарним індексом');
for (let s = 0; s < arr3.length; s++) {
    if (s%2 !== 0) {
        console.log(arr3[s]);
    }
}

console.log('цикл while, числа тільки парні  значення');
let r = 0;
while (r < arr3.length) {
    if (arr3[r]%2 === 0) {
        console.log(arr3[r]);
    }
    r++;
}

console.log('цикл for, числа тільки парні  значення');
for (let q = 0; q < arr3.length; q++) {
    if (arr3[q]%2 === 0) {
        console.log(arr3[q]);
    }
}

console.log('кожне число кратне 3 на слово "okten"');
let w = 0;
while (w < arr3.length) {
    if (w%3 === 0){
        console.log('okten')
    } else {
        console.log(arr3[w]);
    }
    w++;
}

console.log('цикл while в зворотньому порядку');
let x = arr3.length-1;
while (x >= 0) {
    console.log(arr3[x]);
    x--;
}

console.log('цикл for в зворотньому порядку');
for (let y = arr3.length-1; y < arr3.length; y++) {
    console.log(arr3[y]);
}

//
// console.log('цикл while, числа тільки з непарним індексом в зворотньому порядку');
// let e = 0;
// while (e < arr3.length) {
//     if (e%2 !== 0) {
//         console.log(arr3[e]);
//     }
//     e++;
// }
//
// console.log('цикл for, числа тільки з непарним індексом в зворотньому порядку');
// for (let s = 0; s < arr3.length; s++) {
//     if (s%2 !== 0) {
//         console.log(arr3[s]);
//     }
// }
//
// console.log('цикл while, числа тільки парні  значення в зворотньому порядку');
// let r = 0;
// while (r < arr3.length) {
//     if (arr3[r]%2 === 0) {
//         console.log(arr3[r]);
//     }
//     r++;
// }
//
// console.log('цикл for, числа тільки парні  значення в зворотньому порядку');
// for (let q = 0; q < arr3.length; q++) {
//     if (arr3[q]%2 === 0) {
//         console.log(arr3[q]);
//     }
// }
//
// console.log('кожне число кратне 3 на слово "okten" в зворотньому порядку');
// let w = 0;
// while (w < arr3.length) {
//     if (w%3 === 0){
//         console.log('okten')
//     } else {
//         console.log(arr3[w]);
//     }
//     w++;
// }





// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор