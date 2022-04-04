function imprimirTabuada() {
  let numero = document.querySelector("#number").value;
  let selectTabuada = document.querySelector("#selectTabuada");
  if (numero === "") {
    alert("Por favor, digite um número!");
    location.reload();
  } else {
    selectTabuada.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
      selectTabuada.innerHTML += `<option>${numero} x ${i} = ${numero * i}</option>`;
    }
  }
}
