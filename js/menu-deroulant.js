$(document).ready(function() {
    if($(window).width()<426) {
        // quand le document est prêt
        $("ul.sous-menu").hide(); // on cache tous les sous-menu
        $("#support").click(function() {
            // au click du li #support :
            $("#myreverse ul.sous-menu").slideUp("normal");
            $("#societe ul.sous-menu").slideUp("normal");
            $("#domaine-legal ul.sous-menu").slideUp("normal");
            
        
            // on remonte le sous-menu du li #myreverse
            $(this).children("ul.sous-menu").slideToggle("normal");
            // on remonte ou on descend le sous-menu de #support
            $("#myreverse").removeClass("open");
            $("#societe").removeClass("open");
            $("#domaine-legal").removeClass("open");
            // on enlève la class open du li #myreverse
            $(this).toggleClass("open");
            // on ajoute ou enlève la class au li #support
        });
        
        $("#myreverse").click(function() {
            // au click du li #support :
            $("#support ul.sous-menu").slideUp("normal");
            $("#societe ul.sous-menu").slideUp("normal");
            $("#domaine-legal ul.sous-menu").slideUp("normal");
            
        
            
            $(this).children("ul.sous-menu").slideToggle("normal");
            
            $("#support").removeClass("open");
            $("#societe").removeClass("open");
            $("#domaine-legal").removeClass("open");
            
            $(this).toggleClass("open");
            
        });
        
        
        $("#societe").click(function() {
            $("#support ul.sous-menu").slideUp("normal");
            $("#myreverse ul.sous-menu").slideUp("normal");
            $("#domaine-legal ul.sous-menu").slideUp("normal");
            
            $(this).children("ul.sous-menu").slideToggle("normal");
            $("#support").removeClass("open");
            $("#myreverse").removeClass("open");
            $("#domaine-legal").removeClass("open");
            $(this).toggleClass("open");
        });
        
        
        $("#domaine-legal").click(function() {
            $("#support ul.sous-menu").slideUp("normal");
            $("#societe ul.sous-menu").slideUp("normal");
            $("#myreverse ul.sous-menu").slideUp("normal");
            
        
            $(this).children("ul.sous-menu").slideToggle("normal");
            $("#support").removeClass("open");
            $("#societe").removeClass("open");
            $("#myreverse").removeClass("open");
            
            $(this).toggleClass("open");
            
        });
       
    }
});