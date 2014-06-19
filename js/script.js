$('#home').tooltip('hide');
$("a#home").click(function() {
    $("html, body").animate({ 
        scrollTop: 0 
    }, "slow");
    return false;
});
$("#nav_list a").click(function() {
    var target = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, "slow");
    return false;
});