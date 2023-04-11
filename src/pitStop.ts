import axios from "axios";
import {CircuitData} from "./interface/CircuitData";
import {PitStopEntry} from "./interface/PitStopEntry";
import {Cache} from "./cache/cache";
import {PitStopData} from "./interface/PitStopData";

export class PitStop {

    public async getForCurrentYear(raceNumber: number, stop: number): Promise<PitStopData> {
        return this.getFor(new Date().getFullYear(), raceNumber, stop);
    }

    public async getFor(year: number | string, raceNumber: number, stop: number): Promise<PitStopData> {

        const key = Cache.generateKey("pit_stop", year, raceNumber, stop);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get(`https://ergast.com/api/f1/${year}/${raceNumber}/pitstops/${stop}.json`);
        const responseData = response.data.MRData.RaceTable;

        const racesData = responseData.Races && responseData.Races[0] ? responseData.Races[0] : null;

        if (!racesData) {
            throw new Error(`Could not find data for year ${year}, raceNumber ${raceNumber}, stop ${stop}`);
        }

        const circuitData: CircuitData = {
            season: responseData.season,
            round: responseData.round,
            name: racesData.Circuit.circuitName,
            wikiUrl: racesData.Circuit.url,
            id: racesData.Circuit.circuitId,
            lat: parseFloat(racesData.Circuit.Location.lat),
            long: parseFloat(racesData.Circuit.Location.long),
            local: racesData.Circuit.Location.locality,
            country: racesData.Circuit.Location.country,
        };

        const pitStopsData = racesData.PitStops && racesData.PitStops.length ? racesData.PitStops : [];

        const pitStopEntries: PitStopEntry[] = [];
        // Don't know how many stops there could be
        // so probably assume 50 max.
        for (let i = 0; i < 50; i++) {
            const currentPitStop = pitStopsData[i];
            if (currentPitStop === null || currentPitStop === undefined) break;

            pitStopEntries.push({
                driverId: currentPitStop.driverId,
                lap: currentPitStop.lap,
                stop: currentPitStop.stop,
                time: currentPitStop.time,
                duration: currentPitStop.duration
            });
        }

        const pitStop: PitStopData = {
            season: year,
            round: raceNumber,
            stop: stop,
            circuit: circuitData,
            totalStops: pitStopEntries
        }

        Cache.set(key, pitStop);

        return pitStop;
    }

}