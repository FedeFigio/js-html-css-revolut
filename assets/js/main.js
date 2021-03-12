$(document).ready(function() {
    dropDown()
});


function dropDown() {
    var allDrpDwn = $("nav .drp-dwn")
    var allnavLink = $("nav a")


    allnavLink.hover(function(e) {
        allDrpDwn.removeClass("active")
        if (!$(this).next().hasClass("active")) {
            $(this).next().addClass("active")
        }
    });
}