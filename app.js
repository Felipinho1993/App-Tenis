const form = document.getElementById("formAgendamento");
const lista = document.getElementById("listaAgendamentos");

let agendamentos = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const atleta = document.getElementById("atleta").value;
  const adversario = document.getElementById("adversario").value;
  const quadra = document.getElementById("quadra").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;

  // Verificar conflito
  const conflito = agendamentos.some(a =>
    a.quadra === quadra &&
    a.data === data &&
    a.horario === horario
  );

  if (conflito) {
    alert("Este horário já está ocupado nesta quadra.");
    return;
  }

  const agendamento = {
    atleta,
    adversario,
    quadra,
    data,
    horario
  };

  agendamentos.push(agendamento);
  atualizarTabela();
  form.reset();
});

function atualizarTabela() {
  lista.innerHTML = "";

  agendamentos.forEach(a => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${a.atleta}</td>
      <td>${a.adversario}</td>
      <td>${a.quadra}</td>
      <td>${a.data}</td>
      <td>${a.horario}</td>
    `;

    lista.appendChild(tr);
  });
}
