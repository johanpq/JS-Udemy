for(let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    var buttonW = document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        /* var audio = new Audio('sounds/tom-1.mp3'); // criar o audio (objeto)
        audio.play(); // metodo para tocar */

        this.style.color = 'white';

    });
} 

// Vai pegar os 7 botões, poderia colocar o numero 7, ou pegar todos as tags com a classe ".drum" com o seu comprimento que é o que está.

// ou até mesmo criando uma variavel, e pegando o comprimento dos botões para só colocar a variavel no parâmetro do loop

// ex.: var = totalOfButtons = document.querySelectorAll('.drum').length

// Eu posso fazer a função desse jeito também.


// Eu posso saber também ver, qual tag, elemento na tela, acionou a função que foi adicionada um evento para ouvir. E usando this eu eu sei. Se eu usar.: console.log(this); dentro da função e eu for checar o console depois de clicar no elemento(s), você verá qual tag foi clicada.