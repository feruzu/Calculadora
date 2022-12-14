function borrar(){
    document.getElementById('resultado').value='';
    document.getElementById('resultad').value='';
}

function btn(value){
    document.getElementById('resultado').value += value;
}

function calculo(){
    var p = document.getElementById('resultado').value;
    var q = eval(p);
    document.getElementById('resultado').value = p;
    document.getElementById('resultad').value = q;
}