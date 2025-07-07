
export const choices: Choice[] = [
    {
        id: "57feb36b-365f-450f-8ba3-848820a5d08e",
        nextSceneId: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
        choiceText: "Bal"
    }

];

export const scenes: Scene[] = [
    {
        "id": "40d9b19b-8285-43a2-9602-bad661c85c45",
        "content": {
            "id": "00000000-0000-0000-0000-000000000000",
            "text": "3K",
            "soundId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "imageId": "src\assets\otherBG.jpg"
        },
        "choices": [
            {
                id: "57feb36b-365f-450f-8ba3-848820a5d08e",
                nextSceneId: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                choiceText: "Kimész az udvarra"
            },
            {
                id: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                nextSceneId: "57bcbf8d-f241-4659-828b-32f9f95c5583",
                choiceText: "Bent maradsz és kutakodsz"
            }
        ]
    },

    {
        "id": "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
        "content": {
            "id": "00000000-0000-0000-0000-000000000000",
            "text": "(Az udvaron vagy)Az alagútba mész vagy Felmész a padlásra",
            "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "soundId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        },
        "choices": [
            {
                id: "57feb36b-365f-450f-8ba3-848820a5d08e",
                nextSceneId: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                choiceText: "Az alagútba vezet az utad"
            },
            {
                id: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                nextSceneId: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                choiceText: "Felmászol a létrán a padlásra"
            }
        ]
    },

    {
        "id": "57bcbf8d-f241-4659-828b-32f9f95c5583",
        "content": {
            "id": "00000000-0000-0000-0000-000000000000",
            "text": "(Bent maradtál)",
            "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "soundId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        },
        "choices": [
            {
                id: "57feb36b-365f-450f-8ba3-848820a5d08e",
                nextSceneId: "57bcbf8d-f241-4659-828b-32f9f95c5583",
                choiceText: "Ugyanaz marad"
            },
            {
                id: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                nextSceneId: "0d95035c-2f1c-41a1-9436-d3da4fe3e274",
                choiceText: "1 Gomb"
            }
        ]
    },

    {
        "id": "0d95035c-2f1c-41a1-9436-d3da4fe3e274",
        "content": {
            "id": "00000000-0000-0000-0000-000000000000",
            "text": "(Bent maradtál)",
            "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "soundId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        },
        "choices": [
            {
                id: "57feb36b-365f-450f-8ba3-848820a5d08e",
                nextSceneId: "57bcbf8d-f241-4659-828b-32f9f95c5583",
                choiceText: "Tovább"
            }
        ]
    }

];

export interface Scene {
    id: string;
    content: any;
    choices: Choice[];
}

export interface Choice {
    id: string;
    nextSceneId: string;
    choiceText: string;
}



