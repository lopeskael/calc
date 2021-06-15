function insert(num) {
    let numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numero + num;

}
function clean(){
    document.getElementById('operacao').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    let resultado = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    let resultado = document.getElementById('operacao').innerHTML;
    if(operacao) document.getElementById('resultado').innerHTML = eval(resultado);
}
function alter(){
    let resultado = document.getElementById('resultado').innerHTML;
    parseFloat(resultado);
    resultado *= -1;
    document.getElementById('resultado').innerHTML = resultado;
}

function percento(){
    let percent = document.getElementById('operacao').innerHTML;
    let percent1 = parseFloat(percent, 0);
    let percent2 = percent.slice(-1);
    parseFloat(percent2); 
    percent2 = percent2/100;
    document.getElementById('operacao').innerHTML =  percent1+'*'+percent2;
}