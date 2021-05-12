
let textoDigitado = document.querySelector('#texto-tarefa');
    
let botaoAdicionar = document.querySelector('#criar-tarefa');
    
botaoAdicionar.addEventListener('click', function (){

    if (textoDigitado.value.length > 0){
    let listaOrdenada = document.querySelector('#lista-tarefas');

    let criarLi = document.createElement('li');
    criarLi.className = 'itemDaLista';
    criarLi.innerText = textoDigitado.value; 
    criarLi.addEventListener('click', mudarBackground);
    criarLi.addEventListener('dblclick', riscar);
    listaOrdenada.appendChild(criarLi);
    textoDigitado.value = '';
    }
});

let botaoApagar = document.getElementById('apaga-tudo');

botaoApagar.addEventListener('click', apagarTudo);

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoRemoverFinalizados.addEventListener('click', removerFinalizados)

let botaoX = document.getElementById('remover-selecionado');

botaoX.addEventListener('click', removerSelecionado);

let botaoUp = document.getElementById('mover-cima');

botaoUp.addEventListener('click', subirTarefa);


function mudarBackground (event) {
    let itensDaLista = document.getElementsByClassName('itemDaLista');
    for (index = 0; index < itensDaLista.length; index +=1){
        if (itensDaLista[index] === event.target){
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        event.target.classList.add('selecionado');
        } else {
        itensDaLista[index].style.backgroundColor = 'white';
        itensDaLista[index].classList.remove('selecionado');
        }
    }    
}

// Função .constains e outras utilizações do 'classList' vista no link https://mzl.la/3es1LU2

function riscar (event) {
    if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
  }
}

// Função para remover uma tag vista no link https://bit.ly/3o1HRSV

function apagarTudo (){
    let itensDaLista = document.querySelectorAll('.itemDaLista');
    for (index = 0; index < itensDaLista.length; index +=1){
        itensDaLista[index].remove();
    }
}

function removerFinalizados (){
    let itensMarcados = document.querySelectorAll('.completed');
    for (index = 0; index < itensMarcados.length; index +=1){
        itensMarcados[index].remove();
        }
    }

function removerSelecionado (){
    let itensDaLista = document.querySelectorAll('.itemDaLista');

    for (index = 0; index < itensDaLista.length; index +=1){
        if (itensDaLista[index].style.backgroundColor === 'rgb(128, 128, 128)'){
        itensDaLista[index].remove();
        }
    }
}
