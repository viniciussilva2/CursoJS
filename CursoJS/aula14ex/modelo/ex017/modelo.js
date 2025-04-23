function tabuada() {
  let num = document.getElementById("txtn"); //Pegar o valor do número do input.
  let tab = document.getElementById("seltab"); //Pegar o valor do select onde é gerada a tabela.
  let vetorNumeros = [5, 8, 4]; //Vetor de três elementos.

  if (num.value.length == 0) {
    window.alert("Por favor digite um número!");
  } else {
    let n = Number(num.value); //Conversão de texto pra inteiro.
    let c = 1;
    tab.innerHTML = "";

    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
