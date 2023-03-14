/*
    objetivo - quando clicar no botao temos que mostrar a imagem de fundo correspondente

    passo 1- dar um jeito de pegar o elemto html dos botoes
    passo 2- dar um jeito de identificar o clique do usuarionno botao
    passo 3- desmarcar o botao selecionado anterior
    passo 4-  marcar o botao clicado como se estivesse selecionado
    passo 5- esconder imagem anterior
    passo 6- fazer aparecer imagem correspondente ao botao clicado  
    */

//passo 1
const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //passo 3
        desativarBotaoSelecionao();

        //passo 4
        selecionarBotaoCarrossel(botao);

        //passo 5
        esconderImagemAtiva();
        
        //passo 6
        mostrarImagemDeFundo(indice);

    })
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    console.log(botaoSelecionado.classList.remove('selecionado'));
}
