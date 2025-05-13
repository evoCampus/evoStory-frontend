import { AxiosInstance } from "axios";
import { 
    ChoiceApi, 
    ChoiceDTO,
    SceneApi, 
    SceneDTO,
    StoryApi,
    StoryDTO
} from "./api";


export default class Client {
    private readonly choiceAPI: ChoiceApi;
    private readonly sceneAPI: SceneApi;
    private readonly storyAPI: StoryApi;

    constructor (private readonly axiosInstance: AxiosInstance){
        this.choiceAPI = new ChoiceApi(undefined, undefined, axiosInstance);
        this.sceneAPI = new SceneApi(undefined, undefined, axiosInstance);
        this.storyAPI = new StoryApi(undefined, undefined, axiosInstance);
    }

    async getChoiceById(id: string): Promise<ChoiceDTO>{
        const { data } = await this.choiceAPI.getChoice(id);

        return data;
    }

    async getSceneById(id: string): Promise<SceneDTO>{
        const { data } = await this.sceneAPI.apiSceneSceneIdGet(id);

        return data;
    }

    async getStoryById(id: string): Promise<StoryDTO>{
        const { data } = await this.storyAPI.getStory(id);

        return data;
    }
}