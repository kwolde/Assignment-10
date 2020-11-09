$(document).ready(function(){
    $('#responsive-menu').mobileMenu();

    $("a[href$='index.html']").tooltip().attr("title", "Return to the home page.");
    $("a[href$='aboutus.html']").tooltip().attr("title", "Learn about our company.");
    $("a[href$='solutions.html']").tooltip().attr("title", "Vecta Corp. offers 3 solutions for prospecting, converting, and retaining customers");
    $("a[href$='support.html']").tooltip().attr("title", "Email us for support.");
    $("a[href$='contactus.html']").tooltip().attr("title", "How to contact us.");

    $("#solution-tabs").tabs();

    $("#testimonials-accordion").accordion();
});