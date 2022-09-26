// on crée une variable pour récupérer l'image
var imageAgendas = document.getElementById('agenda');

$('span.yellow').click(function() {
// en cliquant sur le span.yellow
    $('div.slide span').removeClass('active');
    // on enlève la class "active" au span qui peut l'avoir
    $(this).addClass('active');
    // on ajoute la class "active" au span sur lequel on vient de cliquer
    imageAgendas.setAttribute("src", "img/photo-agenda.jpg");
    // on change le contenu du src (de l'HTML donc !) de l'image 
});

$('span.red').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageAgendas.setAttribute("src", "img/agenda-red.jpg");
});

$('span.blue').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageAgendas.setAttribute("src", "img/agenda-bleue.jpg");
});

$('span.kaki').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageAgendas.setAttribute("src", "img/agenda-kaki.jpg");
});

// YESS !

var imageCarnet = document.getElementById('carnet');

$('span.vert').click(function() {
// en cliquant sur le span.yellow
    $('div.slide span').removeClass('active');
    // on enlève la class "active" au span qui peut l'avoir
    $(this).addClass('active');
    // on ajoute la class "active" au span sur lequel on vient de cliquer
    imageCarnet.setAttribute("src", "img/carnet-vert.jpg");
    // on change le contenu du src (de l'HTML donc !) de l'image 
});

$('span.red').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageCarnet.setAttribute("src", "img/carnet-red.jpg");
});

$('span.blue').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageCarnet.setAttribute("src", "img/carnet-bleue.jpg");
});

$('span.kaki').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageCarnet.setAttribute("src", "img/carnet-kaki.jpg");
});


var imageStylo = document.getElementById('stylo');

$('span.orange').click(function() {
// en cliquant sur le span.yellow
    $('div.slide span').removeClass('active');
    // on enlève la class "active" au span qui peut l'avoir
    $(this).addClass('active');
    // on ajoute la class "active" au span sur lequel on vient de cliquer
    imageStylo.setAttribute("src", "img/stylo-orange.jpg");
    // on change le contenu du src (de l'HTML donc !) de l'image 
});

$('span.red').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageStylo.setAttribute("src", "img/stylo-red.jpg");
});

$('span.blue').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageStylo.setAttribute("src", "img/stylo-bleue.jpg");
});

$('span.vert').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageStylo.setAttribute("src", "img/stylo-vert.jpg");
});


var imageLivre = document.getElementById('livre');

$('span.red').click(function() {
// en cliquant sur le span.yellow
    $('div.slide span').removeClass('active');
    // on enlève la class "active" au span qui peut l'avoir
    $(this).addClass('active');
    // on ajoute la class "active" au span sur lequel on vient de cliquer
    imageLivre.setAttribute("src", "img/livre-red.jpg");
    // on change le contenu du src (de l'HTML donc !) de l'image 
});

$('span.blue').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageLivre.setAttribute("src", "img/livre-bleue.jpg");
});

$('span.vert').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageLivre.setAttribute("src", "img/livre-vert.jpg");
});

$('span.kaki').click(function() {
    $('div.slide span').removeClass('active');
    $(this).addClass('active');
    imageLivre.setAttribute("src", "img/livre-kaki.jpg");
});