// Alternar entre tela de login e tela de cadastro
document.getElementById("signup").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-container").style.display = "block";
});

// Voltar para a tela de login
document.getElementById("back-to-login").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-container").style.display = "none";
});
