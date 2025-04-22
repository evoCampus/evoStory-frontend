export const choices: Choice[] = [
    {
        id: "57feb36b-365f-450f-8ba3-848820a5d08e",
        nextSceneId: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
        choiceText: "Sztring"
    }
];
export const scenes: Scene[] = [
    {
        "id": "40d9b19b-8285-43a2-9602-bad661c85c45",
        "content": {
            "id": "00000000-0000-0000-0000-000000000000",
            "text": "string",
            "imageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "soundId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        },
        "choices": [
            {
                id: "57feb36b-365f-450f-8ba3-848820a5d08e",
                nextSceneId: "e7431b46-3742-49f1-aa78-1d1ff77d12d7",
                choiceText: "Sztring"
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
