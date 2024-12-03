const avanca = document.querySelectorAll('.btn-proximo');




// Função para alterar a imagem de fundo
function alteraFundo(passo) {
    const body = document.body;




    // Imagens de fundo para cada cenário
    switch (passo) {
        case '1': // Rio de Janeiro
            body.style.backgroundImage = "url('RJ.jpg')";
            break;
        case '2': // Pernambuco
            body.style.backgroundImage = "url('Pernambuco.jpg')";
            break;
        case '7': // Amazonas
            body.style.backgroundImage = "url('Amazonas.jpeg')";
            break;
        case '4': // Voltar para casa
            body.style.backgroundImage = "url('Favela.jpg')";
            break;
        case '5': // Igreja
            body.style.backgroundImage = "url('Igreja.jpg')";
            break;
        case '3': // Pico Tijuca
            body.style.backgroundImage = "url('Pico Tijuca.jpg')";
            break;
        case '6': // Praia
            body.style.backgroundImage = "url('Praia.jpg')";
            break;
        case '8': // Voltar para a igreja
            body.style.backgroundImage = "url('Igreja.jpg')";
            break;
         case '9': // Rio esquerda
            body.style.backgroundImage = "url('Rio.jpg')";
            break;
        case '10': // Rio direita
            body.style.backgroundImage = "url('Rio.jpg')";
            break;
        case '11': // Cidade
            body.style.backgroundImage = "url('Cidade.jpg')";
            break;
        case '12': // Voltar Rio Esquerda
            body.style.backgroundImage = "url('Rio.jpg')";
            break;
        default:
            body.style.backgroundImage = "none";
            break;
    }
}




avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
       
        // Remove a classe 'ativo' do passo atual
        atual.classList.remove('ativo');
        // Adiciona a classe 'ativo' ao próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');




        // Alterar o fundo de acordo com o botão clicado
        alteraFundo(this.getAttribute('data-proximo'));
    });
});













