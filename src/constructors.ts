import {ConstructorsData} from "./interface/ConstructorsData";
import axios from "axios";
import {Cache} from "./cache/cache";

export class Constructors {

    public async getForTeam(teamId: string): Promise<ConstructorsData> {

        const key = Cache.generateKey("constructors", teamId);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get(`https://ergast.com/api/f1/constructors/${teamId}.json`);
        const data = response.data.MRData.ConstructorTable;

        const constructorData: ConstructorsData = {
            id: data.constructorId,
            wikiUrl: data.Constructors[0].url,
            name: data.Constructors[0].name,
            nationality: data.Constructors[0].nationality
        }

        Cache.set(key, constructorData);

        return constructorData;
    }
}