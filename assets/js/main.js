$(document).ready(function() {
    dropDown()
});


function dropDown() {
    var allDrpDwn = $("nav .drp-dwn")
    var allnavLink = $(".nav-right > ul >li>a")


    allnavLink.mouseover(function(e) {
        allDrpDwn.removeClass("active");
        $(this).next().addClass("active");
    });
    $(document).click(function(e) {
        allDrpDwn.removeClass("active");
    });


};