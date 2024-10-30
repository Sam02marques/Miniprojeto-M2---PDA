let usuarios = ["Samuel"];

// Função para atualizar o conteúdo do div
function mostrarMensagem(mensagem) {
  document.getElementById('resultado').innerHTML = `<h1>${mensagem}</h1>`;
}

// CREATE - C
function criarUsuario() {
  const nome = prompt("Digite o nome do novo aluno:");
  if (nome) {
    usuarios.push(nome);
    mostrarMensagem(`Aluno cadastrado com Sucesso: ${nome}`);
  } else {
    mostrarMensagem("Nome inválido. Por favor, tente novamente.");
  }
}

// READ - R
function lerUsuarios() {
  mostrarMensagem(`Lista dos alunos: ${usuarios.join(", ")}`);
}

function lerUsuarioPorIndice() {
  const indice = parseInt(prompt("Digite o índice do usuário que deseja ver:"));
  if (!isNaN(indice) && indice >= 0 && indice < usuarios.length) {
    mostrarMensagem(`Aluno Encontrado: ${usuarios[indice]}`);
  } else {
    mostrarMensagem("Índice inválido ou usuário não encontrado.");
  }
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
    mostrarMensagem("Índice inválido ou usuário não encontrado.");
  }
}

// DELETE - D
function deletarUsuario() {
  const indice = parseInt(prompt("Digite o índice do usuário que deseja deletar:"));
  if (!isNaN(indice) && indice >= 0 && indice < usuarios.length) {
    const usuarioRemovido = usuarios.splice(indice, 1);
    mostrarMensagem(`Usuário Removido: ${usuarioRemovido[0]}`);
  } else {
    mostrarMensagem("Índice inválido ou usuário não encontrado.");
  }
}

