// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let elements = [
    'Hello',
    'Okten',
    123,
    true,
    false,
    [1, 2, 3],
    987,
    'element8',
    'element9',
    'element10'
];
console.log(elements[0],elements[1],elements[2],elements[3],elements[4],elements[5],elements[6],elements[7],elements[8],elements[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "Harry Potter and Philosopher's Stone",
    pageCount: 223,
    genre: 'Fantasy'
};
let book2 = {
    title: "Harry Potter and Chamber of Secrets",
    pageCount: 251,
    genre: 'Fantasy'
};
let book3 = {
    title: "Harry Potter and Prisoner of Azkaban",
    pageCount: 317,
    genre: 'Fantasy'
};
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let HarryPotter = {
    title: "Harry Potter and Philosopher's Stone",
    pageCount: 223,
    genre: 'Fantasy',
    autors: ['J. K. Rowling',57]
};
console.log(HarryPotter);

let Marsianin = {
    title: "Marsianin",
    pageCount: 201,
    genre: 'Fantasy',
    autors: [' E. Veier',45]
};
console.log(Marsianin);

let LessonsinChemistry = {
    title: "Lessons in Chemistry: A Novel",
    pageCount: 400,
    genre: 'Humor',
    autors: ['B. Garmus', 66]
};
console.log(LessonsinChemistry);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {
        name: 'Veronika',
        username: 'VeronikaU',
        password: '45d3v8dx'
        },
    {
        name: 'Ihor',
        username: 'IhorL',
        password: 'btd4cv3d.'
    },
    {
        name: 'Olha',
        username: 'O.Vit',
        password: 'vd338ffv'
    },
    {
        name: 'Iryna',
        username: 'IraGH90',
        password: 'fvd211222'
    },
    {
        name: 'Viktor',
        username: 'Vitya89',
        password: 'vddvdd1'
    },
    {
        name: 'Ivan',
        username: 'IvanLm',
        password: '111111ddddd'
    },
    {
        name: 'lisaveta',
        username: 'Lis23',
        password: '23lis000'
    },
    {
        name: 'Oleg',
        username: 'Oleg25',
        password: 'gvdfv51d5v15'
    },
    {
        name: 'Viktoriya',
        username: 'Vika',
        password: 'dvfvv121v'
    },
    {
        name: 'Nataliya',
        username: 'Nata70',
        password: 'dfvdfv5554'
    },
]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = -3;

if (a !== 0){
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time =1;

if (time >= 0 && time <= 15) {
    console.log('Перша частина');
} else if (time > 15 && time <= 30) {
    console.log('Друга частина');
} else if (time > 30 && time <= 45) {
    console.log('Третя частина');
}else if (time > 45 && time <= 59) {
    console.log('Четверта частина');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 1;
if (day >= 1 && day <= 10) {
    console.log('Перша декада');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада');
} else {
    console.log('Третя декада');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let schedule = prompt('enter the serial number');
switch (+schedule) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let number1 = prompt('enter first number');
let number2 = prompt('enter second number');
if (number1 > number2) {
    console.log(number1);
} else if (number2 > number1) {
    console.log(number2);
} else {
    console.log('Введені числа рівні');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 1;
if (typeof x == null || typeof x == undefined || x == false) {
}


// if (!x) {
//     console.log('default')
// }


//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
