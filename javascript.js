let body=document.querySelector('body');
let container=document.createElement('div');
container.classList.add('container');

body.appendChild(container);

for (let i = 0; i < 16; i++) {

    let gridRow=document.createElement('div');
    gridRow.classList.add('grid-row');
    

    for (let j = 0; j < 16; j++) {
        let div=document.createElement('div');
        div.classList.add('grid-item');

        div.addEventListener('mouseover',()=>{
            div.setAttribute('style','background-color:blue;');
        })
        gridRow.appendChild(div);
    }

    container.appendChild(gridRow);

}

