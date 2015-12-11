$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
    $("#popup2").show();
    $("#popup3").show();
    $("#popup4").show();
    $("#popup5").show();
    $("#popup6").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
    $("#popup4").hide();
    $("#popup5").hide();
    $("#popup6").hide();
}



$(".popup").fancybox({
});