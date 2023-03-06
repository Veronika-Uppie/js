// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let userForm = document.forms.userForm;
userForm.onsubmit = function (eo) {
    eo.preventDefault();
    let userData = document.createElement('div');
    userData.id = 'userData';
    userData.innerText = `Name - ${userForm.username.value} \n Surname - ${userForm.usersurname.value} \n Age - ${userForm.userage.value}`;

    userForm.appendChild(userData);
};