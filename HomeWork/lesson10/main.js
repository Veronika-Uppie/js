// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let userForm = document.forms.userForm;
userForm.onsubmit = function (eo) {
    eo.preventDefault();
    let userData = document.createElement('div');
    userData.id = 'userData';
    userData.innerText = `Name - ${userForm.username.value} \n Surname - ${userForm.usersurname.value} \n Age - ${userForm.userage.value}`;

    userForm.appendChild(userData);
};


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let number = document.getElementById('number');


window.onload = function () {

    localStorage.setItem('keyNumber',number.textContent);

    let keyNumberValue = JSON.parse(localStorage.getItem('keyNumber'));
    console.log(keyNumberValue);
    console.log(typeof keyNumberValue);


    let neuNumber = keyNumberValue + 1;
    console.log(neuNumber);

    // newNumber = JSON.stringify(keyNumberNumber + 1);
    // keyNumber = newNumber;

}

// let number = document.getElementById('number');
// console.log(number.value);
// number.onclick = function (){
//     localStorage.setItem('keyNumber',JSON.stringify(0));
//
// }













// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію



// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

