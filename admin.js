document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaAgendamentos");
  const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

  

  if (agendamentos.length === 0) {
    lista.innerHTML = "<p>Nenhum agendamento encontrado.</p>";
    return;
  }

  agendamentos.forEach((agendamento, index) => {
    const item = document.createElement("div");
    item.classList.add("agendamento-item");
    item.innerHTML = `
      <p><strong>Nome:</strong> ${agendamento.nome}</p>
      <p><strong>Contato:</strong> ${agendamento.contato}</p>
      <p><strong>Data:</strong> ${agendamento.data}</p>
      <p><strong>Hora:</strong> ${agendamento.hora}</p>
      <button data-index="${index}" class="cancelar">Cancelar</button>
    `;
    lista.appendChild(item);
  });

  // Cancelar agendamento
  document.querySelectorAll(".cancelar").forEach(botao => {
    botao.addEventListener("click", e => {
      const i = e.target.dataset.index;
      agendamentos.splice(i, 1); // remove
      localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
      location.reload(); // recarrega a lista
    });
  });
});