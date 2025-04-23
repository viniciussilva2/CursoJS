function carregarHoraDia() {
  var msg = document.getElementById("msg");
  var img = document.querySelector("#imagem img"); // Seleciona a tag <img> dentro de #imagem
  var data = new Date();
  var hora = 18;
  var msgdodia = document.getElementById("msgdodia");
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = "manha.png";
    document.body.style.background = "#e2cd9f";
    msgdodia.innerHTML = "Bom dia !!!";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde.png";
    document.body.style.background = "#b9846f";
    msgdodia.innerHTML = "Boa tarde !!!";
  } else {
    img.src = "noite.png";
    document.body.style.background = "#515154";
    msgdodia.innerHTML = "Boa noite !!!";
  }
}
