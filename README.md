# test-tetr.io

## Sobre o Projeto
Hackenge (Hackathon + Challenge) proposta pela cadeira IF977 - Engenharia de Software, cujo objetivo é implementar um conjunto de testes fim-a-fim no Tetr.io. O Tetr.io é a aplicação utilizada no conjunto de testes e, é resultado de uma Hackenge anterior proposto pela mesma disciplina. Para mais detalhes do jogo, basta [clicar aqui](https://github.com/uandersonricardo/tetr.io) para seguir para o repositório do jogo.

## Instalação e uso

```
# Instalar os pacotes do projeto
npm install

# Executar o Cypress.io
npx cypress open
```

## Conjunto de Testes
### game
- gameplay: 
1. Teste de rotação do tetrominó
2. Teste de movimento para esquerda do tetrominó
3. Teste de movimento para direita do tetrominó
4. Teste de movimento para baixo do tetrominó
  
- rules:
1. Teste de posicionamento do tetrominó dentro do grid (à esquerda)
2. Teste de posicionamento do tetrominó dentro do grid (à direita)
3. Teste de derrota (condição de fim de jogo)
  
- volume:
1. Teste de range de volume

### main
- login:
1. Teste de não permitir o início jogo sem inserir o nome
2. Teste de iniciar o jogo após inserir o nome

- ui:
1. Teste de apresentar a logo
2. Teste de apresentar o botão de jogar
3. Teste de apresentar o pop-up de login
  
- window:
1. Teste de apresentar o título do jogo (tetr.io)
2. Teste de apresentar o ícone da página
  
### score
- scoreboard:
1. Teste de atualização da label de pontuação final
2. Teste de atualização do scoreboard com posição, nome e pontuação
  
- ui:
1. Teste de apresentação do pop-up de login com reset
2. Teste de retorno a tela inicial 

## Equipe
- Alexandre Burle (aqb)
- Danilo Vaz (dvma)
- Matheus Vinícius (mvtna)
- Uanderson Ricardo (urfs)
