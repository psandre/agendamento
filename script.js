document.getElementById("agendamentoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const dados = Object.fromEntries(formData.entries());

  console.log("Agendamento recebido:", dados);

  this.reset();
  document.getElementById("mensagem").classList.remove("hidden");
});
