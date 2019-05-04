var summ = 200;
$('#price').val(`${summ} руб`);

function getValue(a) {
    var part = a.value;
    if(part == -20){
        return 200;
    }
    return +part;
}

function getPrice() {
    var summ = 0;
    var part = document.getElementsByClassName('custom-select');
    for (let i = 0; i < 4; i++) {
        summ += getValue(part[i]);    
    }
    if(getValue(part[3]) == 200){
        $('#price').val(`от ${summ} руб`);
    }
    else{
        $('#price').val(`${summ} руб`);
    }
}
$('.custom-select').change(function (){
    getPrice();
});




// $('.custom-select').click(function () { 
//     summ -= getValue();
//     $('#price').val(summ);
//     $('.custom-select').change(function () { 
//         summ += getValue();
//         $('#price').val(summ);
//     });
// });


// 2.0
