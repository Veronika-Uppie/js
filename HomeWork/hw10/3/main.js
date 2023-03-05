// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let page1 = document.getElementsByTagName('a')[0];
// let page2 = document.getElementsByTagName('a')[1];


page1.onclick = function () {
    let sessionsArray = JSON.parse(localStorage.getItem('sessions')) || [];
    let currentdate = new Date();


    sessionsArray.push(currentdate);
    localStorage.setItem('sessions', JSON.stringify(sessionsArray));

};

// page2.onclick = function () {
//     let infoCurrentDate = document.createElement('div');
//     let infoSessionsArray = JSON.parse(localStorage.getItem('sessions'));
//
//
//     infoCurrentDate.innerText = JSON.stringify(infoSessionsArray);
//     let info = document.getElementById('info');
//
//     info.appendChild(infoCurrentDate);
//
// };