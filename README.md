# Urna eletrônica TCP

## Visão geral
Projeto simples que implementa uma urna eletrônica via sockets TCP em Node.js. Um cliente envia o número de um candidato ao servidor, que valida e contabiliza o voto em memória.

## Arquivos principais
- `server.js` — servidor TCP; mantém o mapa de candidatos e contabiliza votos.
- `cliente.js` — cliente interativo que solicita voto e envia ao servidor.
- `.env` — variáveis de ambiente (HOST, PORT).
- `env-example.md` — exemplo de variáveis de ambiente.
- `package.json` — dependências.
- `.gitignore`
- `README.md` — este arquivo.

## Requisitos
- Node.js (v14+ recomendado)
- npm

## Instalação
No diretório do projeto (Windows PowerShell/Terminal):
```
npm install
```

## Execução
1. Iniciar o servidor (terminal 1):
```
node server.js
```
2. Testar o cliente (terminal 2):
```
node cliente.js
```

## Variáveis de ambiente
Criar arquivo `.env` com:
```
HOST=127.0.0.1
PORT=3000
```

Ou usar `env-example.md` como modelo.

## Protocolo / formato de mensagens
- Cliente envia uma string contendo o número do candidato (ex.: `27`).
- Respostas do servidor:
  - `Voto computado com sucesso!` — voto aceito.
  - `Erro: Candidato inválido!` — voto rejeitado.
- Conexão é encerrada após o envio da resposta.

## Exemplo de uso (fluxo)
1. Cliente solicita voto ao usuário.
2. Usuário fornece número do candidato e confirma.
3. Cliente envia número ao servidor.
4. Servidor valida e incrementa o contador.
5. Cliente recebe a resposta e a conexão é encerrada.

## Observações e melhorias sugeridas
- Persistência: atualmente os votos ficam em memória (Map). Para persistência entre reinícios, salvar em arquivo ou BD.
- Segurança: não há autenticação nem proteção contra múltiplos votos do mesmo eleitor.
- Formato de mensagens: adotar JSON para facilitar extensões.
- Robustez: tratar erros de rede, timeouts e validar entradas com maior rigor.
- Testes: adicionar testes unitários e de integração.

## Contato
Este repositório é parte de um trabalho acadêmico (Disciplina: Redes I). 