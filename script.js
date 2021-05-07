
    let textoDigitado = document.querySelector('#texto-tarefa');
    
    let botaoAdicionar = document.querySelector('#criar-tarefa');
    
    botaoAdicionar.addEventListener('click', function (){

        if (textoDigitado.value.length > 0){
       let listaOrdenada = document.querySelector('#lista-tarefas');

       let criarLi = document.createElement('li');
        criarLi.className = 'itemDaLista';
        criarLi.innerText = textoDigitado.value; 
        criarLi.addEventListener('click', mudarBackground);
        listaOrdenada.appendChild(criarLi);

        textoDigitado.value = '';
        }
    });


    function mudarBackground (event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }