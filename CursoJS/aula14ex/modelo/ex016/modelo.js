function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossivel contar, preencha todos os dados !!";
    // window.alert("[ERRO], preencha todos os campos!!");
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido, Considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{2714}`;
      }
      res.innerHTML += `\u{1F3C1}`;
    } else {
      alert(
        "Erro ao calcular, pois o valor de inicio deve ser menor que o valor do fim da contagem!"
      );
    }
  }
}
