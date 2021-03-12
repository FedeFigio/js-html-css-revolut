$(document).ready(function() {
    dropDown()
});


function dropDown() {
    var allDrpDwn = $("nav .drp-dwn")
    var allnavLink = $("nav a")


    allnavLink.hover(function(e) {
        $(this).next().toggleClass("active")
        console.log(e);

    });
}