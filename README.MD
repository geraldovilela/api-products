# API COM MONGO DB

#### Esta api se utiliza de: TypeScript, TypeORM, MongoDB Atlas, Node, Express para gerar um backend que deve atender aos sequintes requisitos.

- Cadastrar usuario.
- Autencicação via JWT.
- Cadastro de Produtos.
- Busca de Produtos.
- Favoritação de Produtos por usuario.

## Para rodar o projeto.
  Para rodar o projeto é após clonalo será necessario a inclusão da url de conexão do seu cluster do MongoDB Atlas no arquivo ormconfig.json na tag url; 

```json
 "url": "mongodb+srv://<@usernameB>:<@password@>@testeproducts.hofnt.mongodb.net/<@@Nome do DB@@>?retryWrites=true&w=majority",
 
```
feito isso executar o comando npm install ou yarn na pasta do projeto para que as depedencias sejam baixadas;

```
yarn ou npm install
```

A api respondera a chamadas no endereço:
 ```h
 http://localhost:3333 
 ``` 
 por padrão, pode ser alterada no arquivo server.ts;
