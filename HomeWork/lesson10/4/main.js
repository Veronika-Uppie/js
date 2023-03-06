// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let containerDiv = document.getElementsByClassName('container')[0];

console.log(containerDiv);

let locations = [];

for (let i = 0; i < 100; i++) {
    arr.push({title: i}, {page: 'hjk'})}
console.log( arr);

let page = 1;

let prevbut = document.getElementsByTagName("button")[0];
let nextbut = document.getElementsByTagName("button")[1];
handler(page);

prevbut.addEventListener('click', () => handler(page -= 1));
nextbut.addEventListener('click', () => handler(page += 1));
function handler(page, limit = 10) {
    let container = document.getElementById('container');

    let newArr = [];
    let startindex = (page -1) * limit;
    let endindex = page * limit;

    if (endindex < locations.length) {
        nextbut.removeAttribute('disabled');
    } else {
        nextbut.setAttribute('disabled', 'disabled');
        endindex = locations.length;
    }
    if (startindex > 0) {
        prevbut.removeAttribute('disabled');
    } else {
        prevbut.setAttribute('disabled', 'disabled');
        endindex = locations.length;
    }


    for (let i = startindex; i < endindex; i++) {
        let location = locations[i];
        let item = document.createElement('div');
        let title = document.createElement('div');
        let type = document.createElement('div');


        title.innerText = `Title: ${location.title}`;
        type.innerText = `Type: ${location.type}`;


        item.append(title, type);
        newArr.push(item)
        container.replaceChild()
    }
    document.body.replaceChildren(item);

}

