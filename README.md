# PODCAST MANAGER 🎙
## Description
Podcast Manager is a Netflix-inspired app designed to centralize different video podcast episodes, 
organized by specific categories. The main goal is to allow users to find and explore podcasts quickly and efficiently.<br>
This project was carried out in the Fundamentals NodeJS training together with teacher @felipeAguiarCode

## Features
- List Podcast Episodes<br>
- Filter By Podcast Name
## Technologies 
- Typescript
- NodeJs

## Endpoints API
1. GET ``` api/list ```<br>
List all podcasts found
```
[
    {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "categories": [
            "saúde",
            "fitness",
            "esporte"
        ]
    },
    {
        "podcastName": "flow",
        "episode": "GLORIA GROOVE - Flow #406",
        "videoId": "-ja5KB9eEZY",
        "categories": [
            "música"
        ]
    },
    {
        "podcastName": "Inteligência Ltda",
        "episode": "A SEMANA [21 A 27 OUT] DE LANÇAMENTOS 2024 = STREAMINGS + CINEMA - Plantão Nerd #007",
        "videoId": "3eZ6kRplNos",
        "categories": [
            "Lançamentos",
            "Filmes"
        ]
    }
]
```
2. GET ```api/podcasts?p={podcastName} ```<br>
List only the podcast indicated on the endpoint by its name
```
[
    {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "categories": [
            "saúde",
            "fitness",
            "esporte"
        ]
    }
]
```

## Scripts
- npm run start
- npm run start
- npm run dist
- npm run start:dist

  
