
// Initial Data

// Estou criando um quadro virtual.
let square = {
    a1: '',a2: '',a3: '',
    b1: '',b2: '',b3: '',
    c1: '',c2: '',c3: ''
};

let player = '';
let warning = '';
let playing = false;


reset();



// Events

document.querySelector('.reset').addEventListener('click', reset);




// Functions

function reset(){
    warning = '';

    // Estou criando uma varivale para dar um numero aleatorio entre 0 e 1 ;
    let random = Math.floor(Math.random()*2);
    // Aqui tem uma condição se = 0 recebe X se não recebe o ;
    if(random === 0){
        player = 'x';
    }else {
        player = 'o';
    }

    for(let i in square){
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();

};

function renderSquare(){
    for(let i in square){
        // Aqui estou colocando o item do array da div selecionada com a condição.
        let item = document.querySelector(`div[data-item = ${i}]`);
        item.innerHTML = square[i];
    }
}



function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}