function adicionarContato() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        var tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow(tabela.rows.length);

        var cell1 = novaLinha.insertCell(0);
        var cell2 = novaLinha.insertCell(1);

        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
}