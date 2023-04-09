import axios from "axios";
import {CircuitData} from "./interface/CircuitData";
import {PitStopEntry} from "./interface/PitStopEntry";

export class PitStop {

    public async getFor(year: number | string, raceNumber: number, stop: number) {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${raceNumber}/${stop}.json`);
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

        const pitStopsData = racesData.PitStops;

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

        return {
            season: year,
            round: raceNumber,
            stop: stop,
            circuit: circuitData,
            totalStops: pitStopEntries
        }
    }
}