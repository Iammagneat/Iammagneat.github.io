//вводим в буфер фразу для счёта
var str11 = document.getElementById("h2_11").innerHTML;

//вводим слово, до которого нужно сосчитать символы
var pos = str11.search("count");

//выводим куда выдать ответ
document.getElementById("spn11").innerHTML = pos;