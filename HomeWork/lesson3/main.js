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

for (let product of products) {
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
for (let y = arr3.length-1; y >= 0; y--) {
    console.log(arr3[y]);
}


console.log('цикл while, числа тільки з непарним індексом в зворотньому порядку');
let eq = arr3.length-1;
while (eq >= 0) {
    if (eq%2 !== 0) {
        console.log(arr3[eq]);
    }
    eq--;
}

console.log('цикл for, числа тільки з непарним індексом в зворотньому порядку');
for (let sw = arr3.length -1; sw >=0 ; sw--) {
    if (sw%2 !== 0) {
        console.log(arr3[sw]);
    }
}

console.log('цикл while, числа тільки парні  значення в зворотньому порядку');
let rw = arr3.length-1;
while (rw >= 0) {
    if (arr3[rw]%2 === 0) {
        console.log(arr3[rw]);
    }
    rw--;
}

console.log('цикл for, числа тільки парні  значення в зворотньому порядку');
for (let qw = arr3.length-1; qw >= 0; qw--) {
    if (arr3[qw]%2 === 0) {
        console.log(arr3[qw]);
    }
}

console.log('кожне число кратне 3 на слово "okten" в зворотньому порядку');
let ww = arr3.length -1;
while (ww >= 0) {
    if (ww%3 === 0){
        console.log('okten')
    } else {
        console.log(arr3[ww]);
    }
    ww--;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('масив з 10 числових елементів');
let ks = 0;
while (ks < arr4.length) {
    console.log(arr4[ks]);
    ks++;
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = ['qwe', 'rty', 'uui', 'opu', 'dfg', 'jhg', 'vmi', 'myh', 'brg', 'fbh'];

console.log('масив з 10 строкрових елементів');
let qs = 0;
while (qs < arr5.length) {
    console.log(arr5[qs]);
    qs++;
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr6 = ['rgrg', 'egergr', true, false, NaN, 1111, 222222, {name: 'Veronika'}, [1, 2, 3], 'f354413bh'];

console.log('масив з 10 елементів будь-якого типу');
let qsq = 0;
while (qsq < arr6.length) {
    console.log(arr6[qsq]);
    qsq++;
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr7 = ['ergr', 'cscs', true, false, 'svsdc', 1111, 222222, true, 123, false];

console.log('масив з 10 елементів будь-якого типу/ тільки булеві елементи');
let po = 0;
while (po < arr7.length) {
    if (typeof arr7[po] === "boolean") {
        console.log(arr7[po]);
    }
    po++;
}

console.log('масив з 10 елементів будь-якого типу/ тільки числові елементи');
let pp = 0;
while (pp < arr7.length) {
    if (typeof arr7[pp] === "number") {
        console.log(arr7[pp]);
    }
    pp++;
}

console.log('масив з 10 елементів будь-якого типу/ тільки рядкові елементи');
let re = 0;
while (re < arr7.length) {
    if (typeof arr7[re] === "string") {
        console.log(arr7[re]);
    }
    re++;
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

console.log('Наповнити порожній масив 10 елементами через звернення до конкретних індексів');
let arr8 = [];
arr8[0] = 'srgrg';
arr8[1] = 1224234;
arr8[2] = 234234;
arr8[3] = 'sgrrrrtgrt';
arr8[4] = true;
arr8[5] = false;
arr8[6] = [111, 222, 333];
arr8[7] = {name: 'Tim'};
arr8[8] = 1323;
arr8[9] = 'dvf34';

let dv = 0;
while (dv < arr8.length) {
    console.log(arr8[dv]);
    dv++;
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('цикл for на 10  ітерацій з кроком 1');
document.write(`<div>цикл for на 10  ітерацій з кроком 1</div>`)
for (let yi = 0; yi < 10; yi++) {
    console.log(yi);
    document.write(`${yi} `)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

console.log('цикл for на 100  ітерацій з кроком 1');
document.write(`<div>цикл for на 100  ітерацій з кроком 1</div>`)
for (let yi = 0; yi < 100; yi++) {
    console.log(yi);
    document.write(`${yi} `)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

console.log('цикл for на 100  ітерацій з кроком 2');
document.write(`<div>цикл for на 100  ітерацій з кроком 2</div>`)
for (let lk = 0; lk < 100; lk += 2) {
    console.log(lk);
    document.write(`${lk} `)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

console.log('цикл for на 100  ітерацій/ тільки парні кроки');
document.write(`<div>цикл for на 100  ітерацій/ тільки парні кроки</div>`)
for (let ppn = 0; ppn < 100; ppn++) {
    if(ppn%2 === 0) {
        console.log(ppn);
        document.write(`${ppn} `)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log('цикл for на 100  ітерацій/ тільки непарні кроки');
document.write(`<div>цикл for на 100  ітерацій/ тільки непарні кроки</div>`)
for (let ppo = 0; ppo < 100; ppo++) {
    if(ppo%2 !== 0) {
        console.log(ppo);
        document.write(`${ppo} `)
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

console.log('масив книжок')
let books = [
    {
        title: "Harry Potter and Philosopher's Stone",
        pageCount: 223,
        genre: 'Fantasy',
        autors: ['J. K. Rowling']
},
    {
        title: "Harry Potter and Chamber of Secrets",
        pageCount: 251,
        genre: 'Fantasy',
        autors: ['J. K. Rowling']
},
    {
        title: "Harry Potter and Prisoner of Azkaban",
        pageCount: 317,
        genre: 'Fantasy',
        autors: ['J. K. Rowling']
},
    {
        title: "marsianin",
        pageCount: 201,
        genre: 'Fantasy',
        autors: ['M. Vinhranovsʹkyy', 'T. Shevchenko']
},
    {
        title: "Zacharovana Desna",
        pageCount: 219,
        genre: 'filmstory',
        autors: ['O. Dovzhenko']
},

];

let bigestBook = 0;
for (let c = 0; c < books.length; c++){
    let book = books[c];
    if (book.pageCount > bigestBook) {
        book = bigestBook
    }
    console.log(bigestBook)
}






//
// console.log(books[pagCount])
//

// let biggestBook = 0;
// for (let book of books) {
//     let pageCount = book.pageCount;
//     if (pageCount > biggestBook) {
//         book = biggestBook}
//     console.log(biggestBook);
// }


// let lll = 0;
// while (lll < books.length) {
//     let book = books[lll]
//     let page= books.pageCount;
//     let biggestBook = 0;
//     if (page > biggestBook) {
//         book = biggestBook}
//     console.log(biggestBook);
//     lll++
// }




// 1. Получаем число
//
// 2. Записывает последнюю цифру в МИН и МАКС
//
// 3. Запускаем цикл
//
// 4. Сравниваем последнее число(ПС) с МИН и МАКС
//
// 5. Если ПС > МАКС ...... Иначе если ПС < МИН
//
// 6. Кидаем число в соответствии условию
//
// 7. Не забываем убрать последнюю цифру из числа
//
// 8. Делаем вывод сообщения







// let k = 0;
// while (k < arr3.length) {
//     console.log(arr3[k]);
//     k++;
// }


// for (let y = 0; y < arr3.length; y++) {
//     console.log(arr3[y]);
// }
