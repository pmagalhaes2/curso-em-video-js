function verificar() {
  var data = new Date();
  var anoAtual = data.getFullYear();
  var anoFormulario = document.getElementById("ano");

  var resultado = document.getElementById("resultado");
  if (anoFormulario.value.length == 0 || anoFormulario.value > anoAtual) {
    alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var sexo = document.getElementsByName("sexo");
    var idade = Number(anoAtual - anoFormulario.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sexo[0].checked) {
      genero = "homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./assets/img/crianca-menino.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./assets/img/jovem-homem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./assets/img/adulto-homem.png");
      } else {
        img.setAttribute("src", "./assets/img/idoso-homem.png");
      }
    } else {
      genero = "mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./assets/img/crianca-menina.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./assets/img/jovem-mulher.png");
      } else if (idade < 50) {
        img.setAttribute("src", "./assets/img/adulto-mulher.png");
      } else {
        img.setAttribute("src", "./assets/img/idoso-mulher.png");
      }
    }
    resultado.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`;
    resultado.style.textAlign = "center";
    resultado.appendChild(img);
  }
}
