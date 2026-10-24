// Jogo de adivinhação — mesma lógica do pseudocódigo e do fluxograma.

const LIMITE = 6;

let secreto;
let tentativas;
let acertou;

const campoPalpite = document.getElementById('palpite');
const botaoPalpitar = document.getElementById('btn-palpitar');
const botaoReiniciar = document.getElementById('btn-reiniciar');
const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('tentativas');

function mostrar(texto, classe) {
  mensagem.textContent = texto;
  mensagem.className = classe || '';
}

function atualizarContador() {
  contador.textContent = 'Tentativas usadas: ' + tentativas + ' de ' + LIMITE;
}

// INÍCIO: sorteia o número e zera as variáveis
function iniciar() {
  secreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  acertou = false;
  campoPalpite.value = '';
  campoPalpite.disabled = false;
  botaoPalpitar.disabled = false;
  botaoReiniciar.hidden = true;
  mostrar('Digite um número entre 1 e 100.');
  atualizarContador();
  campoPalpite.focus();
}

// Uma rodada do laço: o navegador chama esta função a cada palpite
function palpitar() {
  const palpite = Number(campoPalpite.value);

  // Palpite inválido não gasta tentativa
  if (!Number.isInteger(palpite) || palpite < 1 || palpite > 100) {
    mostrar('Digite um número inteiro entre 1 e 100.');
    return;
  }

  tentativas = tentativas + 1;

  if (palpite === secreto) {
    acertou = true;
  } else if (palpite < secreto) {
    mostrar('O número secreto é MAIOR.');
  } else {
    mostrar('O número secreto é MENOR.');
  }

  atualizarContador();
  campoPalpite.value = '';
  campoPalpite.focus();

  // Condição de parada do laço: acertou OU esgotou as tentativas
  if (acertou || tentativas >= LIMITE) {
    finalizar();
  }
}

// Os dois finais possíveis
function finalizar() {
  if (acertou) {
    mostrar('Parabéns! Você acertou em ' + tentativas + ' tentativa(s).', 'ok');
  } else {
    mostrar('Suas tentativas acabaram! O número secreto era ' + secreto + '.', 'fim');
  }
  campoPalpite.disabled = true;
  botaoPalpitar.disabled = true;
  botaoReiniciar.hidden = false;
}

botaoPalpitar.addEventListener('click', palpitar);
campoPalpite.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') palpitar();
});
botaoReiniciar.addEventListener('click', iniciar);

iniciar();
