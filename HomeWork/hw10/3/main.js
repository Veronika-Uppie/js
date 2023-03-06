// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let page1 = document.getElementsByTagName('a')[0];


page1.onclick = function () {
    let sessionsArray = JSON.parse(localStorage.getItem('sessions')) || [];
    let currentdate = new Date();

    let normdate = `Дата відвідування: ${currentdate.getDate()}.${currentdate.getMonth() + 1}.${currentdate.getFullYear()} Час відвідування: ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()} `;


    sessionsArray.push(normdate);
    localStorage.setItem('sessions', JSON.stringify(sessionsArray));

};

