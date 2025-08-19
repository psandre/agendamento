document.getElementById("agendamentoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const dados = Object.fromEntries(formData.entries());

  console.log("Agendamento recebido:", dados);

  // Recupera agendamentos existentes ou cria array vazio
  let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  // Adiciona o novo agendamento
  agendamentos.push(dados);

  // Salva no localStorage
  localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

  // Limpa formulário e mostra mensagem
  this.reset();

  this.reset();
  document.getElementById("mensagem").classList.remove("hidden");
});
