/* CSS */

/* $("h1").css("color", "red");*/

$('button').css("color", "blue");

// $ eu posso selecionar apenas um elemento ou todos, somente com um $

// Como não é recomendado mudar o estilo das coisas dentro do JS. Criamos um seletor no CSS para adicionar através do ClassList(jQuery é addClass("")) aqui no JS (Que é o recomendado. JS é pra ambiente e não estilização)

//$('h1').addClass("big-tittle"); //Adicionar classe pra essa Tag

//$('h1').removeClass("big-tittle"); //Remove classe da Tag

// Posso adicionar mais de uma class fazendo $('h1').addClass("big-tittle position-h1"); 

$('h1').addClass("big-tittle position-h1");

alert($('h1').hasClass("position-h1")); //Checa se tem a classe configurada na tag. E retorna valores bollean


/* TEXT */

$('h1').text("Teste");  // innerText, vai mudar o texto

$('button').html("<strong>don't click me </strong>"); // innerHTML
