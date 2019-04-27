$('.info').hide();
$('.info').delay(1000).slideDown(700);
$('.spisok1').hide();
$('.spisok2').hide();

$(document).ready(function() {
    $('.developer').hover(function () {
        $('.spisok1').delay(200).slideDown(400);   
    }, function () {
        $('.spisok1').slideUp(200)
    }
    );
        $('.customer').hover(function () {
        $('.spisok2').delay(200).slideDown(400);   
    }, function () {
        $('.spisok2').delay(200).slideUp(200)
    }
    );
});

$('.customer').click(function () {
    location.href = 'customer/index.html';
});
