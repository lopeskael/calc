
function insert(num) {
    var numero = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = numero + num;
}

function clean(){
    document.getElementById('operacao').innerHTML = "";

}

function back(){
    var resultado = document.getElementById('operacao').innerHTML;
    document.getElementById('operacao').innerHTML = (0, resultado.length -1);
}