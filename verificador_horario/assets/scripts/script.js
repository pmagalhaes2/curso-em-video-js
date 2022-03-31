function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let horaAtual = data.getHours();
  msg.innerHTML = `Agora são ${horaAtual} horas.`;
  if (horaAtual >= 0 && horaAtual < 12) {
    //bom dia!
    img.src = "./assets/img/dia.png";
    document.body.style.background = "#DFC48C";
  } else if (horaAtual >= 12 && horaAtual < 18) {
    //boa tarde!
    img.src = "./assets/img/tarde.png";
    document.body.style.background = "#CC846F";
  } else {
    //boa noite!
    img.src = "./assets/img/noite 1.png";
    document.body.style.background = "#014050";
  }
}
