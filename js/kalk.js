"use strict";
$(document).ready(function() {

    $('#yes').one('click', function(event) {
        $('.intro').fadeOut();
        $('#start').fadeIn(3000);
        $('#start').css("display", "flex");
        $('body').css("background", "white");
    });

    $('#no').one('click', function(event) {
        $('.intro').fadeOut();
        $('#intro2').fadeIn(3000);
        $('#intro2').css("display", "flex");
    });


    $('#yes2').one('click', function(event) {
        $('#intro2').fadeOut();
        $('#start').fadeIn(3000);
        $('#start').css("display", "flex");
        $('body').css("background", "white");
    });

    $('#no2').one('click', function(event) {
        $('#intro2').fadeOut();
        $('#intro3').fadeIn(3000);
        $('#intro3').css("display", "flex")
        $('body').css("background", "white");
    });

    $('#yes3').on('click', function(event) {
        $("#intro3").fadeOut();
        $('#start').fadeIn(3000);
        $('#start').css("display", "flex");
        $('body').css("background", "white");
    });

    $("#no3").on('click', function(event) {
        $("#intro3").fadeOut();
        $('#start').fadeIn(3000);
        $('#start').css("display", "flex");
        $('body').css("background", "white");
    });

    $('#start').on('click', function(event) {
        $('#start').fadeOut();
        $('main').fadeIn(4000);
        $('main').css("display", "flex");
        $('body').css("background", "rgb(219, 209, 179)");
    });


    var $bag = $("#bag");
    var $table = $(".bag-table");

    $('.cave-bag').on('click', function(event) {
        $('.cave-bag').fadeOut();
        $bag.addClass("cave-bag");
        $('.stand').fadeIn(4000);
        $('.cave-bag').css("opacity", "0.7");
    });

    /* ------------------------ Elements which will be added to the cave-bag -----------------------*/

    $('td').one('click', function(event) {
        $(this).clone().appendTo($table);
        $(this).css("opacity", "0");

        if (
            ($('.small-bag').css("opacity") === "0") &&
            ($('.underclothes').css("opacity") === "0") &&
            ($('.comb').css("opacity") === "0") &&
            ($('.cap').css("opacity") === "0") &&
            ($('.helmet').css("opacity") === "0") &&
            ($('.gloves').css("opacity") === "0") &&
            ($('.shoes').css("opacity") === "0") &&
            ($('.socks').css("opacity") === "0") &&
            ($('.mtde').css("opacity") === "0") &&
            ($('.ogniwo').css("opacity") === "0") &&
            ($('.croll').css("opacity") === "0") &&
            ($('.simple').css("opacity") === "0") &&
            ($('.shunt').css("opacity") === "0") &&
            ($('.lonza').css("opacity") === "0") &&
            ($('.stopka').css("opacity") === "0") &&
            ($('.poigne').css("opacity") === "0") &&
            ($('.mtde').css("opacity") === "0") &&
            ($('.latarka').css("opacity") === "0") &&
            ($('.rope').css("opacity") === "0") &&
            ($('.owal1').css("opacity") === "0") &&
            ($table.find('td').hasClass('szkic')) &&
            ($table.find('td').hasClass('nrc')) &&
            ($table.find('td').hasClass('pantine')) &&
            ($table.find('td').hasClass('latarka2'))
        )

        {
            console.log('hurra');
            $('.caveman').mouseenter(function() {
                $('main').hide();
                $('#stop').fadeIn(2000);
                $('#stop').css("display", "flex");
                $('body').css("background", "white");
                $('#stop').delay(2000).fadeOut(1000);
                $('#end').delay(5000).fadeIn();
            });
        } else {
            console.log("to jeszcze nie wszystko")
        };

    });

    $('.caveman').one('click', function(event) {
        $('main').hide();
        $('#stop').fadeIn(2000);
        $('#stop').css("display", "flex");
        $('body').css("background", "white");
        $('#stop').delay(5000).fadeOut(1000);
        $('#end').delay(8000).fadeIn();
    });


    $('td').mouseenter(function() {
        var $p = $(this).find('p');
            $p.clone().appendTo($(".info"));
            $(".info").css("display", "block");
    });
    $("td").mouseleave(function() {
        $(".info").empty();
        $(".info").css("display", "none");
    });



    /* ------------------------ Adding elements to man scheme -  elements of equipment marked on man scheme. -------------------*/

    if ($('.caveman-helmet').css("background-color") === "rgb(249, 157, 27)") {
        $('.cap').one('click', function(event) {
            $(".caveman-helmet").css("background-color", "rgb(13, 66, 106)");
            $('.helmet').css("opacity", "1");
            $('.cap').css("opacity", "0");

        })
    }

    $('.helmet').on('click', function(event) {
        if ($(".caveman-helmet").css("background-color") === "rgb(13, 66, 106)") {
            $(".caveman-helmet").css("background-color", "rgb(210, 64, 62)");
            $('.helmet').css("opacity", "0");
            $('.latarka').css("opacity", "1");

        } else if ($(".caveman-helmet").css("background-color") === "rgb(249, 157, 27)") {
            $(".caveman").hide();
            $("#alert-helmet").fadeIn(1500);
            $("#alert-helmet").addClass("alert");
            $("#alert-helmet").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        } else {
            $('.helmet').off('click');
        }
    });

    $('.latarka').on('click', function(event) {
        if ($('.caveman-helmet').css("background-color") === "rgb(210, 64, 62)") {
            $('.light').css("background-color", "rgb(255, 255 , 0)");
            $('.latarka').css("opacity", "0");
        } else {
            $(".caveman").hide();
            $("#alert-light").fadeIn(1500);
            $("#alert-light").addClass("alert");
            $("#alert-light").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });



    var $body = $(".caveman-harness, .caveman-arms, .caveman-body, .caveman-arm, .caveman-thigh, .caveman-body-down, .caveman-shoe-top, .caveman-leg-top");

    if ($body.css("background-color") === "rgb(249, 157, 27)") {
        $('.underclothes').one('click', function(event) {
            $body.css("background-color", "rgb(13, 66, 106)");
            $('.comb').css("opacity", "1");
            $('.underclothes').css("opacity", "0");
        })
    }

    $('.comb').on('click', function(event) {
        if ($body.css("background-color") === "rgb(13, 66, 106)") {
            $body.css("background-color", "rgb(210, 64, 62)");
            $('.comb').css("opacity", "0");
            $('.mtde').css("opacity", "1");
            $('.shoes').css("opacity", "1");
        } else if ($body.css("background-color") === "rgb(249, 157, 27)") {
            $(".caveman").hide();
            $("#alert-comb").fadeIn(1500);
            $("#alert-comb").addClass("alert");
            $("#alert-comb").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        } else {
            $('.comb').off('click');
        }
    });


    var $shoes = $(".caveman-shoe-top, .caveman-shoe-right, .caveman-shoe-left");

    if ($('.caveman-shoe-right').css("background-color") === "rgb(249, 157, 27)") {
        $('.socks').one('click', function(event) {
            $shoes.css("background-color", "rgb(226, 82, 38)");
            $('.shoes').css("opacity", "1");
            $('.socks').css("opacity", "0");
        })
    }

    $('.shoes').on('click', function(event) {
        if (($('.caveman-shoe-right').css("background-color") === "rgb(226, 82, 38)") && ($body.css("background-color") === "rgb(210, 64, 62)")) {
            $shoes.css("background-color", "rgb(151, 134, 49)");
            $('.shoes').css("opacity", "0");
        } else if (($('.caveman-shoe-right').css("background-color") === "rgb(249, 157, 27)") && ($body.css("background-color") === "rgb(210, 64, 62)")) {
            $(".caveman").hide();
            $("#alert-socks").fadeIn();
            $("#alert-socks").addClass("alert");
            $("#alert-socks").fadeOut(4000);
            $(".caveman").show(4000);
            $('.shoes').css("opacity", "0");
        } else if (($('.caveman-shoe-right').css("background-color") === "rgb(226, 82, 38)") && ($body.css("background-color") != "rgb(210, 64, 62)")) {
            $(".caveman").hide();
            $("#alert-shoes").fadeIn(1500);
            $("#alert-shoes").addClass("alert");
            $("#alert-shoes").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
            $('.shoes').css("opacity", "0");
        } else if ($('.caveman-shoe-right').css("background-color") === "rgb(151, 134, 49)") {
            $('.helmet').off('click');
        } else {
            $(".caveman").hide();
            $("#alert-shoes1").fadeIn(1500);
            $("#alert-shoes1").addClass("alert");
            $("#alert-shoes1").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    var $mtde = $(".caveman-harness, .caveman-leg-top");

    $('.mtde').on('click', function(event) {
        if ($body.css("background-color") === "rgb(210, 64, 62)") {
            $mtde.css("background-color", "rgb(24, 45, 137)");
            $('.caveman-body-down-uprzaz').css("background-color", "rgb(89, 92, 104)");
            $('.mtde').css("opacity", "0");
            $('.ogniwo').css("opacity", "1");
            $('.stopka').css("opacity", "1");
        } else {
            $(".caveman").hide();
            $("#alert-mtde").fadeIn(1500);
            $("#alert-mtde").addClass("alert");
            $("#alert-mtde").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });


    $('.ogniwo').on('click', function(event) {
        if ($mtde.css("background-color") === "rgb(24, 45, 137)") {
            $('.ring').css("border", "2px solid rgb(190, 191, 196)");
            $('.ogniwo').css("opacity", "0");
            $('.lonza').css("opacity", "1");
            $('.croll').css("opacity", "1");
            $('.simple').css("opacity", "1");
        } else {
            $(".caveman").hide();
            $("#alert-ring").fadeIn(1500);
            $("#alert-ring").addClass("alert");
            $("#alert-ring").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.simple').on('click', function(event) {
        if ($('.ring').css("border") === "2px solid rgb(190, 191, 196)") {
            $('.ring-simple').css("background-color", "rgb(238, 49, 109)");
            $('.simple').css("opacity", "0");
        } else {
            $(".caveman").hide();
            $("#alert-simple").fadeIn(1500);
            $("#alert-simple").addClass("alert");
            $("#alert-simple").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.croll').on('click', function(event) {
        if ($('.ring').css("border") === "2px solid rgb(190, 191, 196)") {
            $('.ring-croll').css("background-color", "rgb(255, 215, 0)");
            $('.croll').css("opacity", "0");
        } else {
            $(".caveman").hide();
            $("#alert-croll").fadeIn(1500);
            $("#alert-croll").addClass("alert");
            $("#alert-croll").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.lonza').on('click', function(event) {
        if ($('.ring').css("border") === "2px solid rgb(190, 191, 196)") {
            $('.caveman-body-down-lonz').css("background-color", "rgb(165, 26, 133)");
            $('.lonza').css("opacity", "0");
            $('.owal1').css("opacity", "1");
        } else {
            $(".caveman").hide();
            $("#alert-lonz").fadeIn(1500);
            $("#alert-lonz").addClass("alert");
            $("#alert-lonz").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.owal1').on('click', function(event) {
        if ($('.caveman-body-down-lonz').css("background-color") === "rgb(165, 26, 133)") {
            $('.ring-left').css("border", "2px solid rgb(190, 191, 196)");
            $('.ring-right').css("border", "2px solid rgb(190, 191, 196)");
            $('.owal1').css("opacity", "0");
            $('.poigne').css("opacity", "1");
            $('.shunt').css("opacity", "1");
        } else {
            $(".caveman").hide();
            $("#alert-owal").fadeIn(1500);
            $("#alert-owal").addClass("alert");
            $("#alert-owal").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.poigne').on('click', function(event) {
        if ($('.ring-left').css("border") === "2px solid rgb(190, 191, 196)") {
            $('.ring-poigne').css("background-color", "rgb(238, 49, 109)");
            $('.poigne').css("opacity", "0");
        } else {
            $(".caveman").hide();
            $("#alert-poigne").fadeIn(1500);
            $("#alert-poigne").addClass("alert");
            $("#alert-poigne").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.stopka').on('click', function(event) {
        if ($mtde.css("background-color") === "rgb(24, 45, 137)") {
            $('.caveman-leg-stopka').css("background-color", "rgb(89, 92, 104)");
            $('.caveman-body-down-stopka').css("background-color", "rgb(89, 92, 104)");
            $('.stopka').css("opacity", "0");
        } else {
            $(".caveman").hide();
            $("#alert-stopka").fadeIn(1500);
            $("#alert-stopka").addClass("alert");
            $("#alert-stopka").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }
    });

    $('.shunt').on('click', function(event) {
        if ($('.ring-right').css("border") === "2px solid rgb(190, 191, 196)") {
            $('.ring-shunt').css("background-color", "rgb(165, 26, 133)");
            $('.shunt').css("opacity", "0");
        } else {
            $(".caveman").hide();
            $("#alert-shunt").fadeIn(1500);
            $("#alert-shunt").addClass("alert");
            $("#alert-shunt").delay(1500).hide(1000);
            $(".caveman").delay(4000).fadeIn();
        }

    });




    /*----------------------------------Elemets which will be added just to a cave-bag---------------------------------*/
    $('.gloves').one('click', function(event) {
        $(".caveman-hand").css("background-color", "rgb(226, 82, 38)");
        $('.gloves').css("opacity", "0");
    });
    $('.rope').one('click', function(event) {
        $(".hand-rope").css("background-color", "rgb(175, 104, 204)");
        $('.rope').css("opacity", "0");
    });
    $('.small-bag').one('click', function(event) {
        $(".hand-bag").css("background-color", "rgb(255, 157, 53)");
        $('.small-bag').css("opacity", "0");
    });

});