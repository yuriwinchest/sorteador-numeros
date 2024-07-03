let historico = [];
let rodada = 0;

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    if (quantidade <= 0 || minimo >= maximo || quantidade > (maximo - minimo + 1)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        sorteados.push(numeroAleatorio);
    }

    let resultado = document.getElementById('numeros-sorteados');
    resultado.innerHTML = sorteados.join(', ');

    rodada++;
    historico.push(`Rodada ${rodada}: ${sorteados.join(', ')}`);
}

function reiniciar() {
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";
    document.getElementById('numeros-sorteados').innerHTML = 'Sorteados: nenhum até agora';
    historico = [];
    rodada = 0;
    let historicoLista = document.getElementById('historico-lista');
    historicoLista.innerHTML = '';
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
}

function verHistorico() {
    let historicoLista = document.getElementById('historico-lista');
    historicoLista.innerHTML = '';
    historico.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        historicoLista.appendChild(li);
    });
}

document.getElementById('btn-reiniciar').addEventListener('click', function() {
    this.classList.add('container__botao-desabilitado');
    setTimeout(() => {
        this.classList.remove('container__botao-desabilitado');
    }, 500);
});
