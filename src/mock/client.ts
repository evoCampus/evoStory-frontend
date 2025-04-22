import {scenes, Scene} from "./mock";

export default class Client{
    getScene(sceneId: string): Scene | undefined{
        return scenes.find(scene => scene.id === sceneId);
    }
}