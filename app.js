function borrar() {
  document.getElementById("cuenta").value = "";
  document.getElementById("resultado").value = "";
}

function btn(value) {
  document.getElementById("cuenta").value += value;
}

function calculo() {
  var p = document.getElementById("cuenta").value;
  var q = eval(p);
  document.getElementById("cuenta").value = p;
  document.getElementById("resultado").value = q;
}
