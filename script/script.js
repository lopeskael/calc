function insert(num) {
    var numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numero + num;

}
function clean(){
    document.getElementById('operacao').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('operacao').innerHTML;
    if(operacao) document.getElementById('resultado').innerHTML = eval(resultado);
}
function alter(){
    let resultado = document.getElementById('resultado').innerHTML;
    parseFloat(resultado);
    resultado *= -1;
    document.getElementById('resultado').innerHTML = resultado;
}

function percento(){
    var percent = document.getElementById('operacao').innerHTML;
    var percent1 = parseFloat(percent, 0);
    var percent2 = percent.slice(-2);
    parseFloat(percent2); 
    percent2 = percent2/100;
    document.getElementById('operacao').innerHTML =  percent1+'*'+percent2;
}