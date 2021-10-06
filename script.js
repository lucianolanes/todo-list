const textoDigitado = document.querySelector('#texto-tarefa');
const botaoAdicionar = document.querySelector('#criar-tarefa');

botaoAdicionar.addEventListener('click', function () {
  if (textoDigitado.value.length > 0) {
    const listaOrdenada = document.querySelector('#lista-tarefas');
    const criarLi = document.createElement('li');
    criarLi.className = 'itemDaLista';
    criarLi.innerText = textoDigitado.value; 
    criarLi.addEventListener('click', mudarBackground);
    criarLi.addEventListener('dblclick', riscar);
    listaOrdenada.appendChild(criarLi);
    textoDigitado.value = '';
  }
});

function mudarBackground(event) {
  const itensDaLista = document.getElementsByClassName('itemDaLista');
  for (let index = 0; index < itensDaLista.length; index += 1) {
    if (itensDaLista[index] === event.target) {
      event.target.classList.add('selecionado');
    } else {
      itensDaLista[index].classList.remove('selecionado');
    }
  }    
}

// Função .constains e outras utilizações do 'classList' vista no link https://mzl.la/3es1LU2

function riscar(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const botaoApagar = document.getElementById('apaga-tudo');

botaoApagar.addEventListener('click', apagarTudo);

// Função para remover uma tag vista no link https://bit.ly/3o1HRSV

function apagarTudo() {
  const itensDaLista = document.querySelectorAll('.itemDaLista');
  for (let index = 0; index < itensDaLista.length; index += 1) {
    itensDaLista[index].remove();
  }
  localStorage.clear();
}

const botaoRemoverFinalizados = document.getElementById('remover-finalizados');

botaoRemoverFinalizados.addEventListener('click', removerFinalizados)

function removerFinalizados() {
  const itensMarcados = document.querySelectorAll('.completed');
  for (let index = 0; index < itensMarcados.length; index += 1) {
    itensMarcados[index].remove();
  }
}

const botaoX = document.getElementById('remover-selecionado');

botaoX.addEventListener('click', removerSelecionado);

function removerSelecionado() {
  const itensDaLista = document.querySelectorAll('.itemDaLista');

  for (let index = 0; index < itensDaLista.length; index +=1) {
    if (itensDaLista[index].classList.contains('selecionado')) {
      itensDaLista[index].remove();
    }
  }
}

const botaoUp = document.getElementById('mover-cima');

botaoUp.addEventListener('click', subirTarefa);

function subirTarefa() {
  const tarefaSelecionada = document.querySelectorAll('.selecionado');
  const arrayTemporario= [];

  if (tarefaSelecionada.length > 0) {
    const elementoAcima = tarefaSelecionada[0].previousElementSibling;
    if (elementoAcima != null) {
      arrayTemporario.push(tarefaSelecionada[0].innerText);
      arrayTemporario.push(elementoAcima.innerText);
      tarefaSelecionada[0].innerText = arrayTemporario[1];
      tarefaSelecionada[0].classList.remove('selecionado');
      elementoAcima.innerText = arrayTemporario[0];
      elementoAcima.classList.add('selecionado');
    }
    if (tarefaSelecionada[0].classList.contains('completed')) {
      tarefaSelecionada[0].classList.remove('completed');
      elementoAcima.classList.add('completed');
    }
  }
}

const botaoDown = document.getElementById('mover-baixo');

botaoDown.addEventListener('click', descerTarefa);

function descerTarefa() {
  const tarefaSelecionada = document.querySelectorAll('.selecionado');
  const arrayTemporario = [];
  if (tarefaSelecionada.length > 0) {
    let elementoAbaixo = tarefaSelecionada[0].nextElementSibling;
    if (elementoAbaixo != null) {
      arrayTemporario.push(tarefaSelecionada[0].innerText);
      arrayTemporario.push(elementoAbaixo.innerText);
      tarefaSelecionada[0].innerText = arrayTemporario[1];
      tarefaSelecionada[0].classList.remove('selecionado');
      elementoAbaixo.innerText = arrayTemporario[0];
      elementoAbaixo.classList.add('selecionado');
    }
    if (tarefaSelecionada[0].classList.contains('completed')) {
      tarefaSelecionada[0].classList.remove('completed');
      elementoAbaixo.classList.add('completed');
    }
  }
}

const botaoSalvar = document.getElementById('salvar-tarefas');
botaoSalvar.addEventListener('click', salvarTarefas);

function salvarTarefas() {
  const listaTarefas = document.getElementById('lista-tarefas');
  localStorage.setItem('tasks', JSON.stringify(listaTarefas.innerHTML));
}
    
function pegarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.innerHTML = JSON.parse(localStorage.getItem('tasks'));
  const tarefa = document.querySelectorAll('.itemDaLista');
  tarefa.forEach((task) => {
    task.addEventListener('click', mudarBackground);
    task.addEventListener('dblclick', riscar);
  })
}

window.onload = pegarTarefa();