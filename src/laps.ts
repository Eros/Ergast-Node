import { LapsData } from "./interface/LapsData";
import axios from "axios";
import { CircuitData } from "./interface/CircuitData";
import { TimingsData } from "./interface/TimingsData";
import {Cache} from "./cache/cache";

export class Laps {

    public async getForCurrentYear(raceNumber: number, lap: number): Promise<LapsData> {
        return this.getFor(new Date().getFullYear(), raceNumber, lap);
    }

    public async getFor(year: number | string, raceNumber: number, lap: number): Promise<LapsData> {
        const key = Cache.generateKey("laps", year, raceNumber, lap);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get(`https://ergast.com/api/f1/${year}/${raceNumber}/laps/${lap}.json`);
        const responseData = response.data.MRData.RaceTable;

        const racesData = responseData.Races[0];
        const circuitData: CircuitData = {
            season: racesData.season,
            round: racesData.round,
            name: racesData.Circuit.circuitName,
            wikiUrl: racesData.Circuit.url,
            id: racesData.Circuit.circuitId,
            lat: parseFloat(racesData.Circuit.Location.lat),
            long: parseFloat(racesData.Circuit.Location.long),
            local: racesData.Circuit.Location.locality,
            country: racesData.Circuit.Location.country,
        };

        const lapsData = racesData.Laps[0];

        const timings: TimingsData[] = [];

        for (let timing of lapsData.Timings) {
            let time: TimingsData = {
                driverId: timing.driverId,
                position: parseInt(timing.position),
                time: timing.time,
            };

            timings.push(time);
        }

        const laps: LapsData = {
            season: parseInt(year.toString()),
                round: raceNumber,
                wikiUrl: racesData.url,
                raceName: racesData.raceName,
                circuit: circuitData,
                date: new Date(racesData.date),
                time: racesData.time,
                number: parseInt(lap.toString()),
                timings: timings,
        };

        Cache.set(key, laps);

        return laps;
    }
}
