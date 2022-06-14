let botao = document.getElementById("botao-topo");
window.onscroll = function scrollFunction () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 180) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
}

function voltarParaTopo () {
    document.documentElement.scrollTop = 0;
  }
