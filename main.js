
const listaContatos = document.getElementById("listaContatos");

function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        const contato = document.createElement("div");
            contato.classList.add("contato");
            contato.innerHTML = `<strong>${nome}</strong>: ${telefone}`;
            listaContatos.appendChild(contato);
    }
}

function apagarContato() {
    const contato = listaContatos.lastElementChild;
    if (contato) {
        listaContatos.removeChild(contato);
    }
}

function apagarAgenda() {
    while (listaContatos.firstChild) {
        listaContatos.removeChild(listaContatos.firstChild);
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}
    