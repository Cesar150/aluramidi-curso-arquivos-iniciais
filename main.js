function tocaSom(idElementoAudio) {  //2 - Criar uma função que referencia cada tag audio com a função play.
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //1 - capturar todos os botões


let contador = 0;

while (contador < listaDeTeclas.length) { //3- criar um loop

    const tecla = listaDeTeclas[contador]; //4- referenciar em uma constante cada item da lista 
    const instrumento = tecla.classList[1]; //5-referenciar em uma constante cada nome de classe de seu respectivo item.
    const idAudio = `#som_${instrumento}` //6- usar template string para concatenar e referenciar em uma constante.

    tecla.onclick = function () { //7- passar o método onclick para a lista, para o método passamos uma função anômima por causa do hoist não serve uma função declarativa. 
        tocaSom(idAudio); //8- invoca função.
    };

    contador = contador + 1;

}