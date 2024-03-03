// Adicione a função de filtragem a um evento de input
document.querySelector('.search-input').addEventListener('input', function() {
    filtrarProdutos();
});

// Adicione a função de filtragem ao clique do botão
document.querySelector('.botao-busca').addEventListener('click', function() {
    filtrarProdutos();
});

function filtrarProdutos() {
    var input, filtro, cartao, itens, valortexto;
    input = document.querySelector('.search-input');
    filtro = input.value.toUpperCase();
    cartao = document.querySelectorAll('.cartao-item');

    cartao.forEach(function(itens) {
        var h3 = itens.querySelector('h3');
        valortexto = h3.textContent || h3.innerText;

        if (valortexto.toUpperCase().indexOf(filtro) > -1) {
            itens.style.display = '';
        } else {
            itens.style.display = 'none';
        }
    });
}