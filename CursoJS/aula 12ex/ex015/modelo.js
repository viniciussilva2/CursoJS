function verificarIdade() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || fano.value > ano) {
    alert("Erro, verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";

    // Verificar o gênero selecionado
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
      } else if (idade < 21) {
        //Jovem
      } else if (idade < 50) {
        //Adulto
      } else {
        //Idoso
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //CRIANÇA
      } else if (idade < 21) {
        //Jovem
      } else if (idade < 50) {
        //Adulto
      } else {
        //Idoso
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Identificamos ${genero} com ${idade} anos.`;
  }
}

while (temFatia()) {
  comerFatia();
}
