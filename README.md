# Jogo de adivinhação

Jogo de adivinhação feito como desafio de lógica de programação. O computador escolhe um número secreto de 1 a 100 e a pessoa tem até 6 tentativas para descobrir qual é. A cada palpite, o jogo diz se o número secreto é maior ou menor.

O desafio pedia o raciocínio em **pseudocódigo** e **fluxograma**. Além disso, implementei a mesma lógica em **JavaScript**, para poder jogar no navegador.

## Como jogar

1. Abra o arquivo `index.html` no navegador.
2. Digite um número de 1 a 100 e clique em **Palpitar** (ou aperte Enter).
3. Siga as dicas: "MAIOR" ou "MENOR".
4. Acerte em até 6 tentativas para vencer. Se as tentativas acabarem, o jogo revela o número secreto.
5. Clique em **Jogar de novo** para começar outra rodada.

Um palpite inválido (vazio, decimal ou fora de 1 a 100) não gasta tentativa.

## Estrutura do projeto

```
jogo-adivinhacao/
├── index.html      # página do jogo, com o CSS incorporado
├── jogo.js         # lógica do jogo (ligada ao HTML por <script src>)
├── fluxograma.png  # fluxograma da lógica
└── README.md
```

## A lógica

### Pseudocódigo

```
INÍCIO
  secreto ← número aleatório entre 1 e 100
  tentativas ← 0
  acertou ← falso

  ENQUANTO tentativas < 6 E acertou = falso FAÇA
    ESCREVA "Digite um número entre 1 e 100"
    LEIA palpite
    tentativas ← tentativas + 1

    SE palpite = secreto ENTÃO
      acertou ← verdadeiro
    SENÃO SE palpite < secreto ENTÃO
      ESCREVA "O número secreto é MAIOR"
    SENÃO
      ESCREVA "O número secreto é MENOR"
    FIM SE
  FIM ENQUANTO

  SE acertou = verdadeiro ENTÃO
    ESCREVA "Parabéns! Você acertou em ", tentativas, " tentativa(s)"
  SENÃO
    ESCREVA "Suas tentativas acabaram! O número era ", secreto
  FIM SE
FIM
```

### Fluxograma

<div align="center">
  <img src="https://github.com/beatrisAS/Jogo-de-Advinhacao/blob/main/Desafio%20-%20Fluxograma%20do%20jogo%20de%20adivinhação.png" alt="Fluxograma do jogo" width="100%">
  <br>
  <em>Figura 1: Fluxograma do jogo</em>
</div>
<br>

### Conceitos usados

- **Variáveis:** `secreto`, `palpite`, `tentativas` e `acertou`.
- **Laço de repetição:** pede palpites enquanto o jogo não terminou.
- **Condição de parada:** combina o acerto com o limite de 6 tentativas, o que evita um laço infinito.
- **Condicional de três caminhos:** compara o palpite com o número secreto (igual, menor ou maior).
- **Dois finais:** vitória dentro do limite ou fim das tentativas com revelação do número.

## Tecnologias

- HTML e CSS
- JavaScript (sem bibliotecas)

## Autora

Beatris Antunes Silva
