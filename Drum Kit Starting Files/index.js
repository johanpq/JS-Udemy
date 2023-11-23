for(let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    var buttonW = document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        alert("I got clicked!");
    });
} 

// Vai pegar os 7 botões, poderia colocar o numero 7, ou pegar todos as tags com a classe ".drum" com o seu comprimento que é o que está.

// ou até mesmo criando uma variavel, e pegando o comprimento dos botões para só colocar a variavel no parâmetro do loop

// ex.: var = totalOfButtons = document.querySelectorAll('.drum').length

// Eu posso fazer a função desse jeito também.