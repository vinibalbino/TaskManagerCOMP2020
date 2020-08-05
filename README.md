# Task Manager Ciência da Computação 2020

Ciência da Computação - UEMS

## Ola Bom dia, Boa tarde ou Boa noite.

> Esse repositório foi feito para organizar nossas atividades durante a pandemia que está acontecendo, para centralizarmos todo o conteudo que temos em relação as atividades e provas que fazemos.


> ## Back-end: [Vinicius Silva Balbino](https://github.com/vinibalbino/)
> ## Front-end: Em desenvolvimento 🚀⚡️🚀🔥

Para fazer requisições na API do backend utilize o link : https://compapinodejs.herokuapp.com/

A API é simples, apresenta a seguintes rotas caso queira utilizar 

## GET

> **`https://compapinodejs.herokuapp.com/tasks`**
>
> Recebe todas as tarefas armazenadas atraves de um JSON.

> **`https://compapinodejs.herokuapp.com/task/:_id`**
>
> :_id = É o _id da atividade na base de dados.
>
> Recebe apenas a tarefa atraves de um JSON.

## POST

> **`https://compapinodejs.herokuapp.com/new/task`**
>
> É necessario enviar uma requisão que contenha os seguintes parametros em formato de objeto :  name, description, deliveryDate.
>
> Cria uma nova atividade/task.
> Obs: Enviar o deliveryDate como timestamp.

## PUT

> **`https://compapinodejs.herokuapp.com/task/:_id/edit`**
>
> É necessario enviar uma requisão que contenha os seguintes parametros em formato de objeto :  name, description, deliveryDate.
>
> :_id = É o _id da atividade na base de dados.
>
> Edita a ativade relacionada com o _id
>
> Obs: Enviar o deliveryDate como timestamp.

## DELETE

> **`https://compapinodejs.herokuapp.com/task/:_id`**
>
> :_id = É o _id da atividade na base de dados.
>
> Remove a ativade/task relacionada com o _id.
>
> Obs: Enviar o deliveryDate como timestamp.

