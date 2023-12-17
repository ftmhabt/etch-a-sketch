let body=document.querySelector('body');
const btn=document.querySelector('#btn');
let container;

MakeGrid(16);

btn.addEventListener('click',()=>{
    gridsize=prompt();
    MakeGrid(gridsize);
})

function MakeGrid(gridsize=16){

    
    if(container!==undefined){
        container.remove();
    }
        container=document.createElement('div');
        container.classList.add('container');

        body.appendChild(container);

        for (let i = 0; i < gridsize; i++) {

            let gridRow=document.createElement('div');
            gridRow.classList.add('grid-row');
    

            for (let j = 0; j < gridsize; j++) {
                let div=document.createElement('div');
                div.classList.add('grid-item');

                div.addEventListener('mouseover',()=>{
                div.setAttribute('style','background-color:blue;');
                })
            gridRow.appendChild(div);
            }

            container.appendChild(gridRow);
        }
    
    


}

