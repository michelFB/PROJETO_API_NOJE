# API de Usuários Simples com Node.js e Express
Esta é uma API simples construída com Node.js e Express que fornece um endpoint para recuperar uma lista de usuários em formato JSON. Ela serve como um exemplo básico para aprendizado e demonstração de rotas em Express.
## Pré-requisitos

*   Node.js (versão 16 ou superior)
*   npm (ou yarn)

## Instalação

1.  Clone o repositório:

    ```bash
    git clone [URL inválido removido]
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3.  Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```
## Como Executar

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
# ou
node server.js
```

**6. Como Usar:**

Descreva como acessar a rota `/users`. Inclua um exemplo de requisição e a resposta esperada. Exemplo:

## Como Usar

Para obter a lista de usuários, faça uma requisição GET para `http://localhost:3000/users`.

**Exemplo de requisição (com curl):**

```bash
curl http://localhost:3000/users
```

[
  {"id":1,"name":"João","email":"joao@example.com"},
  {"id":2,"name":"Maria","email":"maria@example.com"},
  {"id":3,"name":"Pedro","email":"pedro@example.com"}
]

**7. Testes (Opcional):**

Se você tiver testes automatizados, inclua informações sobre como executá-los.

**8. Contribuição (Opcional):**

Se você aceitar contribuições para o projeto, explique como os outros desenvolvedores podem contribuir.

**9. Licença (Opcional, mas recomendado):**

Especifique a licença sob a qual o projeto é distribuído (ex: MIT, GPL, Apache).