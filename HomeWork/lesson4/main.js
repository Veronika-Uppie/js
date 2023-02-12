// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


function area_of_rectangle(a, b) {
    return a * b;
}

let s_rectangle = area_of_rectangle(10, 20);
console.log(s_rectangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
function area_of_circle(r) {
    return PI * (r * r);
}

let s_circle = area_of_circle(10);
console.log(s_circle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function area_of_cylinder(r, h) {
    return 2 * PI * r * h;
}

let s_cylinder = area_of_cylinder(5, 20);
console.log(s_cylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент

function display_elements(array) {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'vera', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
display_elements(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write('функця створює параграф з текстом:');
function creates_paragraph(p_text){
    document.write(
        `
    <div>
        <p>${p_text}</p>
    </div>
    `
    );
}

creates_paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis quae, recusandae sed suscipit tenetur veniam! Impedit magnam necessitatibus numquam quam ullam. Deleniti et fugiat iusto laboriosam nam neque perspiciatis?');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



document.write('функця створює ul з 3 елементами li:');
function creates_list(li) {
    document.write(
        `
    <ul>
        <li>${li}</li>
        <li>${li}</li>
        <li>${li}</li>
    </ul>
    `
    );
}

creates_list('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut consequuntur eligendi explicabo facilis ipsa, iure laudantium minima natus optio porro quae quaerat quasi quibusdam quis repellendus sed vitae voluptatibus!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write('функця створює ul з елементами li:');
function count_li(li,number) {
    document.write(`<ul>`);
    let i = 0;
    while (i < number) {
        document.write(`<li>Довільний текст </li>`);
        i++;
    }
  document.write(`</ul>`);
    return count_li;
}

count_li('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis dignissimos eligendi ex facere inventore itaque molestiae natus, necessitatibus neque nisi, non odio omnis quas quis, quos sint veniam voluptatem.', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write(`Список, побудованний по массиву`);

let elements = [4568, 'Hello', true, false];
function create_list_by_arr(arr) {
        document.write(`<ul>`);
    for (let element of elements) {
        document.write(`<li>${element}</li>`)
    }
        document.write(`</ul>`);
    return create_list_by_arr;
}

create_list_by_arr(elements);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250