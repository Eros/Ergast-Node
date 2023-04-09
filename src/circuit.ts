import axios from "axios";
import {CircuitData} from "./interface/CircuitData";
import {Cache} from "./cache/cache";

export class Circuit {

    public async getForCurrentYear(round: number): Promise<CircuitData> {
        return this.getFor(new Date().getFullYear(), round);
    }

    public async getFor(year: string | number, round: number): Promise<CircuitData> {
        const response = await axios.get(`http://ergast.com/api/f1/${year}/${round}/circuits.json`);
        const data = response.data.MRData.CircuitTable;

        const circuitData: CircuitData = {
            season: data.season,
            round: data.round,
            name: data.Circuits[0].circuitId,
            wikiUrl: data.Circuits[0].url,
            id: data.Circuits[0].circuitId,
            lat: data.Circuits[0].Location.lat,
            long: data.Circuits[0].Location.long,
            local: data.Circuits[0].Location.locality,
            country: data.Circuits[0].Location.country
        }

        const key = Cache.generateKey("circuit", year, round);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        } else {
            Cache.set(key, circuitData);
        }

        return circuitData;
    }
}