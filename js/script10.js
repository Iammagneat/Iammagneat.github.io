//вводим в буфер фразу для счёта
var str = document.getElementById("h2_10").innerHTML;

//вводим слово, до которого нужно сосчитать символы
var pos = str.lastIndexOf("website");

//выводим куда выдать ответ
document.getElementById("spn10").innerHTML = pos;

index