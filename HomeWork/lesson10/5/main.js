// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)




let tableForm = document.forms.tableForm;
tableForm.onsubmit = function (eo) {
    eo.preventDefault();

    let table = document.createElement('table');
    table.id = ('table');


    let numberRow = document.forms.tableForm.numberRow.value;
    let numberCells = document.forms.tableForm.numberCells.value;
    let contents = document.forms.tableForm.contents.value;



    for (let i = 0; i < numberRow; i++) {
        let tr = document.createElement('tr');

        for (let i = 0; i < numberCells; i++) {
            let td = document.createElement('td');

            td.innerText = contents;


            tr.appendChild(td);


        }

        table.appendChild(tr);
    }

    let tableDiv = document.getElementById('tableDiv');
    tableDiv.appendChild(table);
}

