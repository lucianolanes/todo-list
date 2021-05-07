


    let textoDigitado = document.querySelector('#texto-tarefa');
    
    let botaoAdicionar = document.querySelector('#criar-tarefa');

    botaoAdicionar.addEventListener('click', function (){

       let listaOrdenada = document.querySelector('#lista-tarefas');

       let criarLi = document.createElement('li');
        
       criarLi.innerText = textoDigitado.value;

        listaOrdenada.appendChild(criarLi);

        textoDigitado.value = '';

    });