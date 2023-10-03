/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
  marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
        a seleção dele 
*/

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll('.personagem')


botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indice].classList.add('selecionado');
  });
});


function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector('.personagem.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove('selecionado');
}

/*
passo 1 fazer com que os botoes so aparecam quando o luffy estiver selecionado
-1 checar se o luffy esta selecionado
-2 aplicar a classe "selecionado" nos botoes
passo 2 quando um botao for clicado ele mantera a sombra
-1 checar se os botoes estao com a classe "selecionado"
-2 checar se o botao foi clicado
-3 adicionar a box-shadow
*/
const luffyS = document.querySelector('main div:nth-child(3)');
const icons = document.querySelector('section');
const icon = document.querySelectorAll('li.icon');

if (luffyS.classList.contains('selecionado')) {
  icons.classList.remove('i');
  icon.forEach(function(icon) {
    icon.classList.remove('i');
  });
} else {
  icons.classList.add('i');
  icon.forEach(function(icon) {
    icon.classList.add('i');
  });
}

