function contar() {
  let textInicio = document.querySelector("#inicio");
  inicio = Number(textInicio.value);
  let textFim = document.querySelector("#fim");
  fim = Number(textFim.value);
  let textPasso = document.querySelector("#passo");
  passo = Number(textPasso.value);
  let resultado = document.querySelector("#res");

  if (textInicio.value.length == 0 || textFim.value.length == 0 || textPasso.value.length == 0) {
    alert("[ERRO] Favor preencher todos os dados!");
    location.reload();
  } else {
    resultado.innerHTML = `<p>Contando:</p>`;
    if (inicio <= fim) {
      while (inicio <= fim) {
        resultado.innerHTML += `${inicio} \u{1F449} `;
        inicio += passo;
      }
    } else {
      while (fim <= inicio) {
        resultado.innerHTML += ` ${inicio} \u{1F449} `;
        inicio -= passo;
      }
    }
    resultado.innerHTML += `\u{1F3F4}`;
  }
}
