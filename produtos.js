// Ler arquivos JSON

function lerProdutos() {
    // Faz uma requisição assíncrona para o arquivo JSON
    fetch("https://drive.google.com/file/d/1cnYSud7SQueGKv00d9qVAYwUWWhO1rfL/view?usp=sharing")
        .then(response => {
            // Verifica se a resposta da requisição é bem-sucedida
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo JSON');
            }
            // Converte a resposta JSON para um objeto JavaScript
            return response.json();
        })
        .then(dados => {
            // Chama a função para exibir os dados no HTML
            exibirDados(dados);
        })
        .catch(erro => {
            console.error(erro);
        });
}

// Função para exibir os dados no HTML
function exibirDados(dados) {
    var container = document.getElementById("dados-container");

    // Itera sobre os dados e exibe-os em HTML

    for (var name in dados) {
        if (dados.hasOwnProperty(name)) {
            var paragrafo = document.createElement("p");
            paragrafo.textContent = name + ": " + dados[name];
            container.appendChild(paragrafo);
        }
    }
}

// Chama a função para ler os produtos quando a página carrega
window.onload = lerProdutos;
