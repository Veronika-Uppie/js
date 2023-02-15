// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log('площa прямокутника');
let area_of_rectangle = (a, b) => a * b;
console.log(area_of_rectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

console.log('площa кола');

const PI = 3.14;
let area_of_circle= (r) => PI * (r * r);
console.log(area_of_circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

console.log('площa циліндру');

let area_of_cylinder = (r, h) => 2 * PI * r * h;
console.log(area_of_cylinder(5, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент

console.log('функція виводить кожен елемент масивy')
let display_elements = (array) => {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
display_elements(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

document.write('функця створює параграф з текстом:');
let creates_paragraph = (p_text)  => {
    document.write(
        `
    <div>
        <p>${p_text}</p>
    </div>
    `
    );
}

let p_text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perspiciatis quae, recusandae sed suscipit tenetur veniam! Impedit magnam necessitatibus numquam quam ullam. Deleniti et fugiat iusto laboriosam nam neque perspiciatis?';
creates_paragraph(p_text);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



document.write('функця створює ul з 3 елементами li:');
let creates_list = (li) => {
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
let count_li = (li,number) => {
    document.write(`<ul>`);
    let i = 0;
    while (i < number) {
        document.write(`<li>Довільний текст </li>`);
        i++;
    }
    document.write(`</ul>`);
}

let list = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis dignissimos eligendi ex facere inventore itaque molestiae natus, necessitatibus neque nisi, non odio omnis quas quis, quos sint veniam voluptatem.';
count_li(list, 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

document.write(`Список, побудованний по массиву`);

let arr = [4568, 'Hello', true, false];
let create_list_by_arr = (elements) => {
    document.write(`<ul>`);
    for (let element of elements) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`);
}

create_list_by_arr(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

document.write("функція виводить масив об'єктів в документ")

let persons = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 31}
];

let display_arr= (arr)  => {
    for (let item of arr) {
        document.write(`<div>`);
        for (let itemKey in item) {
            document.write(`<p>${itemKey}: ${item[itemKey]},</p>`);
        }
        document.write(`</div>`);
    }

}

display_arr(persons);


// - створити функцію яка повертає найменьше число з масиву

console.log('функція повертає найменьше число з масиву');

let num_arr = [1997, 1985, 1988, 1964, 2021, 1976, 2015, 1985, 2000]

let smallest_num = (arr) => {
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }
    console.log(min);
}
smallest_num(num_arr);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

console.log('функція сумує значення елементів масиву');

let arr_of_num = [10, 10, 10, 20];

let sum = (arr) => {
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    console.log(sum);
    return sum;
}

sum(arr_of_num);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

console.log('функція міняє місцями занчення у відповідних індексах');

let arr1 = [11,22,33,44];
let swap = (arr,index1,index2)  => {
    for (let j = 0; j < arr.length; j++) {
        if (j === index1) {
            let index3 = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = index3
            console.log(arr);
        }
        if (index1 >= arr.length || index2 >= arr.length) {
            console.log('Error')
        }
    }
}

swap(arr1, 3, 0);
swap(arr1, 4, 0);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

console.log('функція обміну валюти');

let exchange = (sumUAH,currencyValues,exchangeCurrency)  => {
    for (let item of currencyValues){
        if (item.currency === exchangeCurrency) {
            let result = sumUAH / item.value
            console.log(result);
            return result;
        }
        else {
            console.log('Error');
        }
    }
}

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');



