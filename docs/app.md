# Podcast Manager


### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios separados por categorias

### Domínio
Podcasts feitos em vídeo

### Features

[] Listar os episódios em sessões de categorias
    - Saúde
    - Fitness
    - Mentalidade
    - Humor

[] Filtrar episódios por nome do podcasts

## Como

### Feature:
- Listar os episódios em sessões de categorias

### Como vou implementar:
GET: Vou retornar em uma API REST

- Nome do podcast
- Nome do episódio
- URL do vídeo
- Imagem de capa
- Categoria


```js
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    categories: ["saúde", "fitness", "esporte"],
},
{
    podcastName: "Flow",
    episode: "GLORIA GROOVE - Flow #406",
    videoId: "-ja5KB9eEZY",
    categories: ["música"],
}

}
```
