$(document).ready(function() {
    $(".burger").click(function() {
        $(this).toggleClass("burger-open");
        $(".nav-produit ").toggleClass("is-open")
    });
    $(".nav-produit ul li a").click(function(){
    $(".nav-produit").removeClass("is-open");
	$(".burger").removeClass("burger-open");
    });
});