//вводим в буфер фразу для счёта
var str10 = document.getElementById("h2_10").innerHTML;

//вводим слово, до которого нужно сосчитать символы
var pos = str10.search("count");

//выводим куда выдать ответ
document.getElementById("spn10").innerHTML = pos;