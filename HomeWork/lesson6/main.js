// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log (str1.length);
console.log (str2.length);
console.log (str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';

console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
let str_cl = str.replaceAll(' ', '')
                .replaceAll('y', 'y ')
console.log(str_cl);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str_1 = 'Ревуть воли як ясла повні';
let stringToarray = (str) => console.log(str.split(' '));

stringToarray(str_1);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let num_arr = [10,8,-7,55,987,-1011,0,1050,0];

let filter = num_arr.map((num) => {
    return String(num);
})
console.log(filter);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => {
            return a - b;
        })
    } else if (direction === 'descending') {
        arr.sort((a, b) => {
            return b - a;
        })
    } else {
        console.log('Error')
    }
    console.log(arr);
}

sortNums(nums,'ascending');
sortNums(nums,'descending');

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort_arr = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
})
console.log(sort_arr);


let filter_dur = coursesAndDurationArray.filter(user => user.monthDuration > 5);
console.log(filter_dur);


let filter_map = coursesAndDurationArray.map((user, index) => {
   return {id: index + 1, title: user.title, monthDuration: user.monthDuration};
});
console.log(filter_map);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10','ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



let arr_cards = [{cardSuit: 'heart', value: 6, color: 'red'}, {cardSuit: 'heart', value: 7, color: 'red'}, {cardSuit: 'heart', value: 8, color: 'red'},{cardSuit: 'heart', value: 9, color: 'red'},{cardSuit: 'heart', value: 10, color: 'red'},{cardSuit: 'heart', value: 'ace', color: 'red'}, {cardSuit: 'heart', value: 'jack', color: 'red'}, {cardSuit: 'heart', value: 'queen', color: 'red'}, {cardSuit: 'heart', value: 'king', color: 'red'},
                {cardSuit: 'diamond', value: 6, color: 'red'}, {cardSuit: 'diamond', value: 7, color: 'red'}, {cardSuit: 'diamond', value: 8, color: 'red'},{cardSuit: 'diamond', value: 9, color: 'red'},{cardSuit: 'diamond', value: 10, color: 'red'},{cardSuit: 'diamond', value: 'ace', color: 'red'}, {cardSuit: 'diamond', value: 'jack', color: 'red'}, {cardSuit: 'diamond', value: 'queen', color: 'red'}, {cardSuit: 'diamond', value: 'king', color: 'red'},
                {cardSuit: 'spade', value: 6, color: 'black'}, {cardSuit: 'spade', value: 7, color: 'black'}, {cardSuit: 'spade', value: 8, color: 'black'},{cardSuit: 'spade', value: 9, color: 'black'},{cardSuit: 'spade', value: 10, color: 'black'}, {cardSuit: 'spade', value: 'ace', color: 'black'}, {cardSuit: 'spade', value: 'jack', color: 'black'}, {cardSuit: 'spade', value: 'queen', color: 'black'}, {cardSuit: 'spade', value: 'king', color: 'black'},
                {cardSuit: 'clubs', value: 6, color: 'black'}, {cardSuit: 'clubs', value: 7, color: 'black'}, {cardSuit: 'clubs', value: 8, color: 'black'},{cardSuit: 'clubs', value: 9, color: 'black'}, {cardSuit: 'clubs', value: 10, color: 'black'}, {cardSuit: 'clubs', value: 'ace', color: 'black'}, {cardSuit: 'clubs', value: 'jack', color: 'black'}, {cardSuit: 'clubs', value: 'queen', color: 'black'}, {cardSuit: 'clubs', value: 'king', color: 'black'}
];
console.log('finde spade ace');
let finde_spade_ace = arr_cards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(finde_spade_ace);

console.log('finde all 6');

let finde_all_6 = arr_cards.filter(value => value.value === 6);
console.log(finde_all_6);

console.log('finde red');

let finde_all_red = arr_cards.filter(value => value.color === 'red');
console.log(finde_all_red);

console.log('finde diamond');

let finde_diamond = arr_cards.filter(value => value.cardSuit === 'diamond');
console.log(finde_diamond);

console.log('finde clubs');

let finde_clubs = arr_cards.filter(value => value.cardSuit === 'clubs' && value.value !== 6 && value.value !== 7 && value.value !== 8);
console.log(finde_clubs);


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log('упакуванні карти по "мастях"');

console.log(arr_cards.reduce((accumulator, value) => {
    if (value.cardSuit === 'spade') {
        accumulator.spades.push(value);
    } else if (value.cardSuit === 'diamond') {
        accumulator.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        accumulator.hearts.push(value);
    } else  {
        accumulator.clubs.push(value);
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]}));



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

console.log("пошук всіх об'єктів");


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


console.log(coursesArray.filter((item) => item.modules.includes('sass')));


console.log(coursesArray.filter((item) => item.modules.includes('docker')));




