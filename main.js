const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emogi celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emogi decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota miníma:"));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault(); //e.preventDefault(): A página não será recarregada.
    // Isso pode ser útil em situações onde queremos processar os dados do formulário antes de enviar ou realizar outra ação após o envio, 
    // sem que a página recarregue.
    
    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

    function adicionarLinha() {
        const inputNomeAtividade = document.getElementById('nome-atividade');
        const inputNotaAtividade = document.getElementById('nota-atividade');

        if (atividades.includes(inputNomeAtividade.value)) {
            alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
        } else {
            atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += `</tr>`;
    
        linhas += linha;
        }
    
        inputNomeAtividade.value = ''; // <-- Limpa o formulário
        inputNotaAtividade.value= '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas; 
        // O innerHTML é uma propriedade em JavaScript que permite alterar o conteúdo HTML de um elemento selecionado. 
        // Você pode usá-lo para adicionar, substituir ou remover elementos HTML de um elemento existente em uma página da web. 
        // Isso é útil para dinamicamente atualizar o conteúdo de uma página sem ter que recarregá-la por completo.
    }

    function atualizaMediaFinal(){
        const mediaFinal = calculaMediaFinal();

        document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
        document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    }

    function calculaMediaFinal(){
        let somaDasNotas = 0

        for(let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
        }

        return somaDasNotas / notas.length;
    }