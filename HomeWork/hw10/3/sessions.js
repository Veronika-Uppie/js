// console.log();

let info = document.getElementById("info");

let infoarr = JSON.parse(localStorage.getItem('sessions'));

for (let infoarrEl of infoarr) {
    let infoBlock = document.createElement('div');
    let text = document.createElement('p');

    text.innerText = `Сессія ${JSON.stringify(infoarrEl)}`;


    infoBlock.appendChild(text);
    document.body.appendChild(infoBlock);

}

console.log(infoarr);

//
// info.innerText = .