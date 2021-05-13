
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

function mudarBackground (event) {
    let itensDaLista = document.getElementsByClassName('itemDaLista');
    for (index = 0; index < itensDaLista.length; index +=1){
        if (itensDaLista[index] === event.target){
        event.target.classList.add('selecionado');
        } else {
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

let botaoApagar = document.getElementById('apaga-tudo');

botaoApagar.addEventListener('click', apagarTudo);

// Função para remover uma tag vista no link https://bit.ly/3o1HRSV

function apagarTudo (){
    let itensDaLista = document.querySelectorAll('.itemDaLista');
    for (index = 0; index < itensDaLista.length; index +=1){
        itensDaLista[index].remove();
    }
    localStorage.clear();
}

let botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoRemoverFinalizados.addEventListener('click', removerFinalizados)

function removerFinalizados (){
    let itensMarcados = document.querySelectorAll('.completed');
    for (index = 0; index < itensMarcados.length; index +=1){
        itensMarcados[index].remove();
        }
    }

let botaoX = document.getElementById('remover-selecionado');

botaoX.addEventListener('click', removerSelecionado);
    
function removerSelecionado (){
    let itensDaLista = document.querySelectorAll('.itemDaLista');

    for (index = 0; index < itensDaLista.length; index +=1){
        if (itensDaLista[index].classList.contains('selecionado')){
        itensDaLista[index].remove();
        }
    }
}

let botaoUp = document.getElementById('mover-cima');

botaoUp.addEventListener('click', subirTarefa);

function subirTarefa() {
    let tarefaSelecionada = document.querySelectorAll('.selecionado');
    let arrayTemporario= [];

    if (tarefaSelecionada.length > 0){

    let elementoAcima = tarefaSelecionada[0].previousElementSibling;
        
    if (elementoAcima != null){

    arrayTemporario.push(tarefaSelecionada[0].innerText);

    arrayTemporario.push(elementoAcima.innerText);

    tarefaSelecionada[0].innerText = arrayTemporario[1];
    tarefaSelecionada[0].classList.remove('selecionado');


    elementoAcima.innerText = arrayTemporario[0];
    elementoAcima.classList.add('selecionado');
    }

    if (tarefaSelecionada[0].classList.contains('completed')){
    tarefaSelecionada[0].classList.remove('completed');
    elementoAcima.classList.add('completed');
        }
    }
}


let botaoDown = document.getElementById('mover-baixo');

botaoDown.addEventListener('click', descerTarefa);

function descerTarefa() {
    let tarefaSelecionada = document.querySelectorAll('.selecionado');
    let arrayTemporario= [];

    if (tarefaSelecionada.length > 0) {
    let elementoAbaixo = tarefaSelecionada[0].nextElementSibling;

        if (elementoAbaixo != null){
    arrayTemporario.push(tarefaSelecionada[0].innerText);

    arrayTemporario.push(elementoAbaixo.innerText);

    tarefaSelecionada[0].innerText = arrayTemporario[1];
    tarefaSelecionada[0].classList.remove('selecionado');

    elementoAbaixo.innerText = arrayTemporario[0];
    elementoAbaixo.classList.add('selecionado');

    }

    if (tarefaSelecionada[0].classList.contains('completed')){
        tarefaSelecionada[0].classList.remove('completed');
        elementoAbaixo.classList.add('completed');

        }
    }
}

let botaoSalvar = document.getElementById('salvar-tarefas');
botaoSalvar.addEventListener('click', salvarTarefas);

function salvarTarefas (){
    let listaTarefas = document.getElementById('lista-tarefas');
        localStorage.setItem('tasks', listaTarefas.innerHTML);
    }
    
window.onload = pegarTarefa();

function pegarTarefa (){
    let listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = localStorage.getItem('tasks');
}

