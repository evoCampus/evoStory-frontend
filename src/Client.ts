import axios from "axios";
import { 
    ChoiceApi, 
    ChoiceDTO,
    CreateChoiceDTO,
    CreateSceneDTO,
    CreateStoryDTO,
    SceneApi, 
    SceneDTO,
    StoryApi,
    StoryDTO
} from "./api";


export default class Client {
    private readonly choiceAPI: ChoiceApi;
    private readonly sceneAPI: SceneApi;
    private readonly storyAPI: StoryApi;

    constructor ()
    {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5006"
        });
        this.choiceAPI = new ChoiceApi(undefined, undefined, axiosInstance);
        this.sceneAPI = new SceneApi(undefined, undefined, axiosInstance);
        this.storyAPI = new StoryApi(undefined, undefined, axiosInstance);
    }

    async getChoices(): Promise<ChoiceDTO[]>{
        const { data } = await this.choiceAPI.getChoices();

        return data;
    }

    async getScenes(): Promise<SceneDTO[]>{
        const { data } = await this.sceneAPI.getScenes();

        return data;
    }

    async getStories(): Promise<StoryDTO[]>{
        const { data } = await this.storyAPI.getStories();

        return data;
    }

    async getChoiceById(id: string): Promise<ChoiceDTO>{
        const { data } = await this.choiceAPI.getChoice(id);

        return data;
    }

    async getSceneById(id: string): Promise<SceneDTO>{
        const { data } = await this.sceneAPI.getScene(id);

        return data;
    }

    async getStoryById(id: string): Promise<StoryDTO>{
        const { data } = await this.storyAPI.getStory(id);

        return data;
    }
    
    async saveChoice(choice: CreateChoiceDTO): Promise<void>{
        await this.choiceAPI.createChoice(choice);
    }

    async saveScene(scene: CreateSceneDTO): Promise<CreateSceneDTO>{
        const { data } = await this.sceneAPI.createScene(scene);

        return data;
    }

    async saveStory(story: CreateStoryDTO): Promise<void>{
        await this.storyAPI.createStory(story);
    }

    async deleteChoice(id: string): Promise<void>{
        await this.choiceAPI.deleteChoice(id);
    }

    async deleteScene(id: string): Promise<void>{
        await this.sceneAPI.deleteScene(id);
    }

    async deleteStory(id: string): Promise<void>{
        await this.storyAPI.deleteStory(id);
    }

    async addStoryById(id: string): Promise<StoryDTO>{
        const { data } = await this.storyAPI.editStory(id);

        return data;
    }
}