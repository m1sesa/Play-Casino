
function jugar() {
  var numeroUsuario = parseInt(document.getElementById("numero").value);
  var fichas = parseInt(document.getElementById("fichas").value);
  var numeroAleatorio = Math.floor(Math.random() * 1) ;
  var contador = parseInt(document.getElementById("contador").innerHTML);

  if (numeroUsuario === numeroAleatorio) {
    fichas *= 2;
    contador += fichas;
    document.getElementById("mensaje").innerHTML = "¡Ganaste!";
    document.getElementById("resultado").innerHTML = "Ganaste " + fichas + " fichas";
  } else {
    contador -= fichas;
    fichas = 0;
    document.getElementById("mensaje").innerHTML = "Lo siento, perdiste el número es " + numeroAleatorio;
    document.getElementById("resultado").innerHTML = "Perdiste toda tu apuesta";
  }

  document.getElementById("fichas").value = fichas;
  document.getElementById("contador").innerHTML = contador;
}
