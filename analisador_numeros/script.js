let btnAdicionar = document.querySelector("#adicionar");
let btnFinalizar = document.querySelector("#finalizar");
let selectNumeros = document.querySelector("#selectNumeros");
let listaNumeros = [];

function adicionaNumero() {
  let textNumero = document.querySelector("#numero");
  let numero = Number(textNumero.value);
  if (numero == "" || numero < 1 || numero > 100 || listaNumeros.indexOf(numero) != -1) {
    alert("Valor inválido ou já encontrado na lista");
  } else {
    listaNumeros.push(numero);
    resultado.innerHTML = "";
    selectNumeros.innerHTML += `<option>Valor ${numero} adicionado.</option>`;
  }
  textNumero.value = "";
  textNumero.focus();
}

function finalizaLista() {
  if (listaNumeros.length == 0) alert("Adicione valores antes de finalizar!");
  else {
    let resultado = document.querySelector("#resultado");
    let soma = 0;
    for (let num of listaNumeros) {
        soma += num;
    }
    resultado.innerHTML = "";
    resultado.innerHTML += `<p>Ao todo, temos ${listaNumeros.length} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${Math.max(...listaNumeros)}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${Math.min(...listaNumeros)}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${soma / listaNumeros.length}.</p>`;
  }
}
