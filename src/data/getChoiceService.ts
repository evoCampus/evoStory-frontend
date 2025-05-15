import { AxiosInstance } from "axios";

export type ChoiceDTO = {
    Id: string;
    NextSceneId: string;
    ChoiceText: string;
}

export const getchoiceService= {
    async getChoiceById(id: string): Promise<ChoiceDTO>{
        const { data } = await this.choiceAPI.getChoice(id);

        return data;
    }
}