$(function () {

    setTimeout(() => {
        $(".load_block").fadeOut(1000);
    }, 2000);



    $('.menu_close').click(function () {

        $('.menu-links').css({
            transform: 'translate(-100%)'
        });
        $(".background").css({
            transform: 'translateY(-100%)'
        })
    });




    $(".menu-links li a").click(function () {
        $(".background").css({
            transform: 'translateY(-100%)'
        })
    })
    $('.menu_open').click(function () {
        $('.menu-links').css({
            transform: 'translate(0%)'
        });
        $(".background").css({
            transform: 'translateY(0)'
        })
    });

    $('.signup_block ul li a').hide();
    $(".clearTxt").hide(100);
    $('.signup_block #signup_input').click(function () {
        $('.signup_block ul li a').toggle();
        $('.fa-angle-down').toggleClass("fa-times");

    })

    $(document).ready(function () {
        $('.clearTxt').click(function () {
            $("#signup_input").val('');
            $("#variants").show(1000);
        })
    })

    $('.fa-angle-down').click(function () {
        $('.signup_block ul li a').hide(100);

    });
    $('.hide_box').hide(100);
    $('.signup_block button').click(function () {
        $('.hide_block').fadeIn(100);

        $('.hide_box').css({
            transform: 'translateX(0)'
        });
        $('.hide_box').toggle(100);
    });
    // ******************   Jscript   ***************************

    let signup_input = document.getElementById('signup_input'),
        variants = document.getElementById('variants');
    let clearTxt = document.querySelector('.clearTxt');
    signup_input.addEventListener('keypress', () => {
        variants.classList.add('deactive');
        clearTxt.classList.addClass('.active');
    });
    let showpass = document.getElementById('showpass');
    let eyeId = document.getElementById('eyeID');
    let eyeClass = document.querySelector('.fa-eye-slash');
    let readjs = document.querySelector('.readjs');
    num0 = false;

    readjs.addEventListener('click', () => {
        if (!num0) {
            showpass.removeAttribute('type', 'password');
            showpass.setAttribute('type', 'text');

            eyeClass.classList.remove('fa-eye-slash');
            eyeClass.classList.add('fa-eye');
            num0 = true;
        } else {
            showpass.removeAttribute('type', 'text');
            showpass.setAttribute('type', 'password');

            eyeClass.classList.remove('fa-eye');
            eyeClass.classList.add('fa-eye-slash');
            num0 = false;
        }
    })
    // **********************   Jscript   **************************
    $('.signup_block ul li #li-1').click(function () {
        $('.signup_block ul li a').hide(100);
        $('#signup_input').attr('placeholder', 'Как играть в Доту 2?');
        $('.fa-angle-down').toggleClass("fa-times");
    });
    $('.signup_block ul li #li-2').click(function () {
        $('.signup_block ul li a').hide(100);
        $('#signup_input').attr('placeholder', 'Как научиться играть в Dota 2?');
        $('.fa-angle-down').toggleClass("fa-times");
    });
    $('.signup_block ul li #li-3').click(function () {
        $('.signup_block ul li a').hide(100);
        $('#signup_input').attr('placeholder', 'Dota 2 играть онлайн без скачивания игры?');
        $('.fa-angle-down').toggleClass("fa-times");
    });
    $(".background").click(function () {
        $(".background").css({
            transform: 'translateY(-100%)'

        });
        $(".menu-links").css({
            transform: 'translateX(-100%)'
        })
    })
    $('.Ok_btn').click(function () {
        $('.hide_box').hide(100);
        $('.hide_block').fadeIn(100);
        $('.hide_block').fadeOut(1000);
    });
    $('.hide_block').hide(100);

    $(".registr_block").hide(100);
    $(".menu-btn button").click(function () {
        $(".registr_block").show(1000);

    })

    $(".regster_btn button").click(function () {
        $(".registr_block").hide(400);
        $(".header_sign-in-bl").fadeIn(1000);
        $(".header_sign-in-bl").fadeOut(400);
    });
    $(".header_sign-in-bl").fadeOut(1000);


    $(document).ready(function () {
        $('#btnclr,#btnclr1').click(function () {
            $(".clear").val('');
            $('.signup_block ul li a').hide(100);
            $('.signup_block #signup_input').attr('placeholder', 'Общий вопрос');
            $('.fa-angle-down').toggleClass("fa-times");
        })
    })

    $(".registr_block").dblclick(function () {
        $(".registr_block").hide(600);
    })
    $("#element-2,#element-3,#element-4,#element-5,#element-6,#element-7,#element-8,.active2,.active3,.active4,.active5,.active6,.active7,.active8").css({
        opacity: '0'
    });;


    $("#element-1").click(function () {
        $("#element-1").css({
            opacity: '0'
        });
        $("#element-1").css({
            opacity: '1'
        });
        $(".active2,.active3,.active4,.active5,.active6,.active7,.active8").css({
            opacity: '0'
        });
        $(".active1").css({
            opacity: '1'
        });

        $("#element-2").css({
            opacity: '0'
        })


    })
    $("#element-2").click(function () {
        $("#element-2").css({
            opacity: '1'
        });
        $("#element-1,#element-3,#element-4,#element-5,#element-6,#element-7,#element-8").css({
            opacity: '0'
        });
        $(".active1,.active3,.active4,.active5,.active6,.active7,.active8").css({
            opacity: '0'
        });
        $(".active2").css({
            opacity: '1'
        });

    })
    $("#element-3").click(function () {
        $("#element-2,#element-1,#element-4,#element-5,#element-6,#element-7,#element-8").css({
            opacity: '0'
        });
        $("#element-3").css({
            opacity: '1'
        });
        $(".active1,.active2,.active4,.active5,.active6,.active7,.active8").css({
            opacity: '0'
        });


        $(".active3").css({
            opacity: '1'
        })

    })
    $("#element-4").click(function () {
        $("#element-4").css({
            opacity: '1'
        });
        $("#element-1,#element-2,#element-3,#element-5,#element-6,#element-7,#element-8").css({
            opacity: '0'
        });
        $(".active1,.active2,.active3,.active5,.active6,.active7,.active8").css({
            opacity: '0'
        });
        $(".active4").css({
            opacity: '1'
        });
    })
    $("#element-5").click(function () {
        $("#element-5").css({
            opacity: '1'
        });
        $("#element-1,#element-2,#element-3,#element-4,#element-6,#element-7,#element-8").css({
            opacity: '0'
        });
        $(".active1,.active2,.active3,.active4,.active6,.active7,.active8").css({
            opacity: '0'
        });
        $(".active5").css({
            opacity: '1'
        });

    })
    $("#element-6").click(function () {
        $("#element-6").css({
            opacity: '1'
        });
        $("#element-1,#element-2,#element-3,#element-4,#element-5,#element-7,#element-8").css({
            opacity: '0'
        });
        $(".active1,.active2,.active3,.active4,.active5,.active7,.active8").css({
            opacity: '0'
        });
        $(".active6").css({
            opacity: '1'
        });

    })
    $("#element-7").click(function () {
        $("#element-7").css({
            opacity: '1'
        });
        $("#element-1,#element-2,#element-3,#element-4,#element-5,#element-6,#element-8").css({
            opacity: '0'
        });
        $(".active1,.active2,.active3,.active4,.active5,.active6,.active8").css({
            opacity: '0'
        });
        $(".active7").css({
            opacity: '1'
        });

    })
    $("#element-8").click(function () {
        $("#element-8").css({
            opacity: '1'
        });
        $("#element-1,#element-2,#element-3,#element-4,#element-5,#element-6,#element-7").css({
            opacity: '0'
        });
        $(".active1,.active2,.active3,.active4,.active5,.active6,.active7").css({
            opacity: '0'
        });
        $(".active8").css({
            opacity: '1'
        });

    })





})