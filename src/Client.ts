import axios from "axios";
import {
    ChoiceApi,
    ChoiceDTO,
    CreateChoiceDTO,
    CreateSceneDTO,
    CreateStoryDTO,
    CreateUserDTO,
    LoginDTO,
    SceneApi,
    SceneDTO,
    StoryApi,
    StoryDTO,
    UserApi,
    UserDTO,
    InventoryApi
} from "./api";


export default class Client {
    private readonly choiceAPI: ChoiceApi;
    private readonly sceneAPI: SceneApi;
    private readonly storyAPI: StoryApi;
    private readonly userAPI: UserApi;
    private readonly inventoryAPI: InventoryApi;


    constructor() {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:5006",
            withCredentials: true
        });
        this.choiceAPI = new ChoiceApi(undefined, undefined, axiosInstance);
        this.sceneAPI = new SceneApi(undefined, undefined, axiosInstance);
        this.storyAPI = new StoryApi(undefined, undefined, axiosInstance);
        this.userAPI = new UserApi(undefined, undefined, axiosInstance);
        this.inventoryAPI = new InventoryApi(undefined, undefined, axiosInstance);
    }

    async getChoices(): Promise<ChoiceDTO[]> {
        const { data } = await this.choiceAPI.getChoices();

        return data;
    }

    async getScenes(): Promise<SceneDTO[]> {
        const { data } = await this.sceneAPI.getScenes();

        return data;
    }

    async getStories(): Promise<StoryDTO[]> {
        const { data } = await this.storyAPI.getStories();

        return data;
    }

    async getChoiceById(id: string): Promise<ChoiceDTO> {
        const { data } = await this.choiceAPI.getChoice(id);

        return data;
    }

    async getSceneById(id: string): Promise<SceneDTO> {
        const { data } = await this.sceneAPI.getScene(id);

        return data;
    }

    async getStoryById(id: string): Promise<StoryDTO> {
        const { data } = await this.storyAPI.getStory(id);

        return data;
    }

    async saveChoice(choice: CreateChoiceDTO): Promise<void> {
        await this.choiceAPI.createChoice(choice);
    }

    async saveScene(scene: CreateSceneDTO): Promise<CreateSceneDTO> {
        const { data } = await this.sceneAPI.createScene(scene);

        return data;
    }

    async saveStory(story: CreateStoryDTO): Promise<void> {
        await this.storyAPI.createStory(story);
    }

    async deleteChoice(id: string): Promise<void> {
        await this.choiceAPI.deleteChoice(id);
    }

    async deleteScene(id: string): Promise<void> {
        await this.sceneAPI.deleteScene(id);
    }

    async deleteStory(id: string): Promise<void> {
        await this.storyAPI.deleteStory(id);
    }

    async addStoryById(id: string): Promise<StoryDTO> {
        const { data } = await this.storyAPI.editStory(id);

        return data;
    }

    async loginUser(user: LoginDTO): Promise<UserDTO> {
        const { data } = await this.userAPI.login(user);

        return data;
    }
    async registerUser(user: CreateUserDTO): Promise<void> {
        await this.userAPI.createUser(user);
    }

    async getUser(userID: string): Promise<UserDTO> {
        const { data } = await this.userAPI.getUser(userID);

        return data;
    }

    async deleteUser(userID: string): Promise<UserDTO> {
        const { data } = await this.userAPI.getUser(userID);

        return data;
    }

    async getCurrentUser(): Promise<UserDTO> {
        const { data } = await this.userAPI.getCurrentUser();
        return data;
    }

    async logoutUser(): Promise<void> {
        await this.userAPI.logout();
    }

    async selectChoice(choiceId: string): Promise<string> { 
        const response = await this.choiceAPI.apiChoiceSelectPost(choiceId);
        const data: any = response.data;
        return data.nextSceneId;
    }

    async addItem(itemId: string, quantity: number = 1): Promise<void> {
    const mySessionId = localStorage.getItem("userId") || localStorage.getItem("sessionId");

    if (!mySessionId) {
        console.error("No session id!");
        return;
    }
        await this.inventoryAPI.apiInventoryPickupItemPost({
            itemId: itemId,
            quantity: quantity,
            sessionId: mySessionId
        });
    }

    async clearInventory(): Promise<void> {
        await this.inventoryAPI.apiInventoryClearPost();
    }

    async getInventory(): Promise<any[]> {
        const response = await this.inventoryAPI.apiInventoryMyInventoryGet();
        return response.data;
    }
}