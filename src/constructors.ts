import {ConstructorsData} from "./interface/ConstructorsData";
import axios from "axios";

export class Constructors {

    public async getForTeam(teamId: string): Promise<ConstructorsData> {
        const response = await axios.get(`https://ergast.com/api/f1/constructors/${teamId}.json`);
        const data = response.data.MRData.ConstructorTable;

        return {
            id: data.constructorId,
            wikiUrl: data.Constructors[0].url,
            name: data.Constructors[0].name,
            nationality: data.Constructors[0].nationality
        }
    }
}