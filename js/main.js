var $btn = $('.menubar li a');

$btn.click(function(){
    $btn.removeClass('on');
    $(this).addClass('on');
});

$('.btn_yellow').click(function(){
   $('.all').fadeOut(0);
   $('.yellow').fadeIn(100);
});

$('.btn_pink').click(function(){
    $('.all').fadeOut(0);
    $('.pink').fadeIn(100);
});
$('.btn_blue').click(function(){
    $('.all').fadeOut(0);
    $('.blue').fadeIn(100);
});
$('.btn_orange').click(function(){
    $('.all').fadeOut(0);
    $('.orange').fadeIn(100);
});
$('.btn_sky').click(function(){
    $('.all').fadeOut(0);
    $('.sky').fadeIn(100);
});
$('.btn_purple').click(function(){
    $('.all').fadeOut(0);
    $('.purple').fadeIn(100);
});

function openviewPink() {
    window.open('https://chekkooo.github.io/mmca/','','width=1700,height=1000,scrollbars=yes,top=100,left=100,resizable=yes')
}

function openviewPinkm() {
    window.open('https://chekkooo.github.io/mmca/mobile/index','','width=500,height=900,scrollbars=yes,top=100,left=100,resizable=yes')
}

function openviewBlue() {
    window.open('https://chekkooo.github.io/shop/','','width=1700,height=1000,scrollbars=yes,top=100,left=100,resizable=yes')
}

function openviewPurple() {
    window.open('https://chekkooo.github.io/cookie/','','width=1500,height=1000,scrollbars=yes,top=100,left=100,resizable=yes')
}

function openviewSky() {
    window.open('https://chekkooo.github.io/maplestory/','','width=1700,height=1000,scrollbars=yes,top=100,left=100,resizable=yes')
}

function openviewOrange() {
    window.open('https://chekkooo.github.io/design/','','width=1700,height=1000,scrollbars=yes,top=100,left=100,resizable=yes')
}