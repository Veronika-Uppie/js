
let info = document.getElementById("info");

let infoarr = JSON.parse(localStorage.getItem('sessions'));

for (let infoarrEl of infoarr) {
    let infoBlock = document.createElement('div');
    infoBlock.className = 'infoBl'
    let text = document.createElement('p');
    text.innerText = ` ${JSON.stringify(infoarrEl)}`;


    infoBlock.appendChild(text);
    document.body.appendChild(infoBlock);

}
