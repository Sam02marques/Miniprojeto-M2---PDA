let usuarios = [];

// Função para atualizar o conteúdo do div
function mostrarMensagem(mensagem) {
  document.getElementById('resultado').innerHTML = `<h1>${mensagem}</h1>`;
}

// CREATE - C
function criarUsuario() {
  const nome = document.getElementById("User").value;
  if (nome && !/[^A-Za-z0-9\s]/.test(nome) && !/[0-9]/.test(nome)) {
    usuarios.push(nome);
    mostrarMensagem(`Aluno cadastrado com Sucesso: ${nome}`);
    atualizarLista(); // Atualiza a lista de usuários
    document.getElementById("User").value = "";
  } else {
    mostrarMensagem("Nome inválido. Por favor, tente novamente.");
  }
  
}
document.getElementById("User").addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Verifica se a tecla pressionada é "Enter"
    criarUsuario(); // Chama a função de criar usuário
    event.preventDefault();
  }
})

// READ - R
function lerUsuarios() {
  mostrarMensagem(`Lista dos alunos: ${usuarios.join(", ")}`);
}

// UPDATE - U
function atualizarUsuario() {
  const indice = parseInt(prompt("Digite o índice do aluno que deseja atualizar:"));
  if (!isNaN(indice) && indice >= 0 && indice < usuarios.length) {
    const novoNome = prompt("Digite o novo nome do aluno:");
    if (novoNome) {
      const nomeAntigo = usuarios[indice];
      usuarios[indice] = novoNome;
      mostrarMensagem(`Aluno Atualizado: de ${nomeAntigo} para ${novoNome}`);
    } else {
      mostrarMensagem("Nome inválido.");
    }
  } else {
    mostrarMensagem("Índice inválido ou aluno não encontrado.");
  }
}

// Função para atualizar a lista visual de usuários
function atualizarLista() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = ''; // Limpa a lista atual

  usuarios.forEach((usuario, indice) => {
    const listItem = document.createElement('li');
    listItem.textContent = usuario;

    // Botão de remover usuário
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.onclick = () => deletarUsuario(indice);

    // Adiciona o botão ao item da lista
    listItem.appendChild(deleteButton);
    userList.appendChild(listItem);
  });
}
// DELETE - D
function deletarUsuario(indice) {
  if (indice >= 0 && indice < usuarios.length) {
    const usuarioRemovido = usuarios.splice(indice, 1);
    mostrarMensagem(`Aluno Removido: ${usuarioRemovido[0]}`);
    atualizarLista();
  } else {
    mostrarMensagem("Índice inválido ou aluno não encontrado.");
  }
}

