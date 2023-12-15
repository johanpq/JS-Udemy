var cor = $('button').click(function() {
    $('button').addClass("color");
});

$('input').keypress(function(event) {
    alert(event.key); // event é o objeto do evento, e event.key é uma propriedade para pegar a tecla clicada (nesse caso é a digitada KKK)
});

$(document).keypress(function(event) {
    $('h1').html(event.key);  // peguei o html, e qualquer tecla que eu clicar vai aparecer no h1
});

// Podemos simplicar ainda mais os eventos com o método on()

$('button').on("mouseover", function() {
    $('button').addClass("color");
})