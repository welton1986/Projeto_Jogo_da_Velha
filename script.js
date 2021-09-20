
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

// Aqui estou pegando todos os componentes em item e adicionando um evendo de click.
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click' , itemClick);
});



// Functions

// Essa e a função de clique , que mostra onde esta clicando.
function itemClick(event) {
    let data = event.target.getAttribute('data-item');
    if (playing && square[data] === ''){
        square[data] = player;

        // Aqui esta jogando na tela para ficar vizivel , chamando essa função.
        renderSquare();
        // Função para alternar entre os players.
        togglePlayer();
    }
}

// Essa e uma funçao que esta resetando , e fazendo outroscomandos .
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


// Aqui estou jogando a informação do loop dentro da div item.
function renderSquare(){
    for(let i in square){
        // Aqui estou colocando o item do array da div selecionada com a condição.
        let item = document.querySelector(`div[data-item = ${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();
}


// Aqui estou colocando na tela 
function renderInfo(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

// Função criada para variar entre os jogadores.
function togglePlayer() {
    // se player e X coloca O caso contrario Coloca X , essa e a logica aqui.
    player = (player === 'x') ? 'o' : 'x';

    renderInfo();
}


// Aqui estou fazendo uma verificação para saber quem venceu se foi o O ou X ou empate .
function checkGame(){
    if(checkWinnerFor('x')){
        warning = 'O "x" venceu';
        playing = false;
    }else if(checkWinnerFor('o')){
        warning = 'O "o" venceu';
        playing = false;
    } else if (isFull()){
        warning = 'Deu empate';
        playing = false;
    }
}

// Aqui estamos criando uma função com um Array com todas as possibilidades.
function checkWinnerFor(player){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
        
    ];


    // Aqui estou varrendo a variavel pos em um loop e colocando condições.
    for(let w in pos) {
        let pArray = pos[w].split(',');
        let hasWon = pArray.every((option)=>{
            if(square[option]=== player) {
                return true;
            }else {
                return false;
            }
        });
        if(hasWon){
            return true;
        }
    }

    return false;
}


// Essa função caso prencha todos e ninguem ganha.
function isFull(){
    for(let i in square) {
        if(square[i] === '') {
            return false;
        }
    }

    return true;
}