
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
        let itensDaLista = document.getElementsByClassName('itemDaLista');
        for (index = 0; index < itensDaLista.length; index +=1){
            if (itensDaLista[index] === event.target){
                event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            } else {
                itensDaLista[index].style.backgroundColor = 'white';
            }
        }    
    }