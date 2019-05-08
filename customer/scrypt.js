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
 
if(window.innerWidth <= 767){
    $('.order-2').addClass('order-0');
    $('.order-2').removeClass('order-2');
}

window.onload = function () {

    var after = {
        animationEnabled: true,
        title: {
            text: "До"
        },
        data: [{
            type: "doughnut",
            innerRadius: "40%",
            indexLabel: "{label}: #percent%",
            dataPoints: [
                { label: "Vk", y: 20 },
                { label: "Сайт", y: 15 },
                { label: "Телефонный звонок", y: 15 },
                { label: "Мессенджеры", y: 5 },
                { label: "Уход", y: 45 }
            ]
        }]
    };
    var before = {
        animationEnabled: true,
        title: {
            text: "После"
        },
        data: [{
            type: "doughnut",
            innerRadius: "40%",
            indexLabel: "{label}: #percent%",
            dataPoints: [
                { label: "Vk", y: 35 },
                { label: "Сайт", y: 30 },
                { label: "Телефонный звонок", y: 20 },
                { label: "Мессенджеры", y: 10 },
                { label: "Уход", y: 5 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(after);
    $("#chartContainer1").CanvasJSChart(before);
    
    }


    