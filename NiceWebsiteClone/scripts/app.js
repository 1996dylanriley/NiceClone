$(document).ready(function () {
    $('#evidence').hide();
    $(window).width(function () {
        var win = $(this);
        if (win.width() <= 830) { $('#navbuttons').hide(); }
        if (win.width() >= 830) { $('#navbuttons').show(); }
        //if (win.width() >= 1360) { $('#navbuttons').css('margin-left', '20%'); }
        //if (win.width() <= 1360) { $('#navbuttons').css('margin-left', '15%'); }
        //if (win.width() <= 1280) { $('#navbuttons').css('margin-left', '10%'); }
        //if (win.width() <= 1230) { $('#navbuttons').css('margin-left', '7%'); }
        //if (win.width() <= 1190) { $('#navbuttons').css('margin-left', '5%'); }
        //if (win.width() <= 1110) { $('#navbuttons').css('margin-left', '2%'); }
        //if (win.width() <= 1150) { $('.headerlogo').css('font-size', '45px'); }
        //if (win.width() >= 1150) { $('.headerlogo').css('font-size', '50px'); }
        if (win.width() <= 1180) { $('.headerlogo1').hide(); }
        if (win.width() >= 1180) { $('.headerlogo1').show(); }
        if (win.width() <= 814) { $('.headerlogo').css('padding-left', '30%'); }
        if (win.width() > 814) { $('.headerlogo').css('padding-left', '0px'); }
        if (win.width() > 814) { $('.menubutton').hide(); }
        if (win.width() > 814) { $('.signin2').hide(); }

        

    });
    $(window).resize( function () {
        var win = $(this);
        if (win.width() <= 830) { $('#navbuttons').hide(); }
        if (win.width() >= 830) { $('#navbuttons').show(); }
        //if (win.width() >= 1360) { $('#navbuttons').css('margin-left', '20%'); }
        //if (win.width() <= 1360) { $('#navbuttons').css('margin-left', '15%'); }
        //if (win.width() <= 1280) { $('#navbuttons').css('margin-left', '10%'); }
        //if (win.width() <= 1230) { $('#navbuttons').css('margin-left', '7%'); }
        //if (win.width() <= 1190) { $('#navbuttons').css('margin-left', '5%'); }
        //if (win.width() <= 1110) { $('#navbuttons').css('margin-left', '2%'); }
        //if (win.width() <= 1150) { $('.headerlogo').css('font-size', '45px'); }
        //if (win.width() >= 1150) { $('.headerlogo').css('font-size', '50px'); }
        if (win.width() <= 1180) { $('.headerlogo1').hide(); }
        if (win.width() >= 1180) { $('.headerlogo1').show(); }
        //if (win.width() <= 814) { $('.headerlogo').css('padding-left', '5%'); }
        //if (win.width() > 814) { $('.headerlogo').css('padding-left', '0px'); }
        //if (win.width() > 814) { $('.menubutton').hide(); }
        //if (win.width() < 814) { $('.menubutton').show(); }
        //if (win.width() > 814) { $('.signin2').hide(); }
        //if (win.width() < 814) { $('.signin2').show(); }
    });
    $('.evidencetoggle').on('click', function () {
        $('#evidence').toggle();
    });
    //$('.menubutton').on('click', function () {
    //    $('#navbuttons').toggle();
    //});
});