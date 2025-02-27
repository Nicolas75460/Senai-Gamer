let mybutton = document.getElementById("scrollToTopBtn");

// Quando o usuário rolar para baixo 20px a partir do topo do documento, exibe o botão
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Quando o usuário clicar no botão, rola até o topo da página
mybutton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}