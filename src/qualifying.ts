import {QualifyingData} from "./interface/QualifyingData";
import axios from "axios";
import {CircuitData} from "./interface/CircuitData";
import {QualifyingResultEntry} from "./interface/QualifyingResultEntry";
import {Cache} from "./cache/cache";

export class Qualifying {

    public async getForCurrentYear(round: number): Promise<QualifyingData> {
        return this.getFor(new Date().getFullYear(), round);
    }

    public async getFor(year: string | number, round: number): Promise<QualifyingData> {

        const key = Cache.generateKey("qualifying", year, round);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/qualifying.json`);
        const responseData = response.data.MRData.RaceTable;

        const racesData = responseData.Races[0];

        if (!racesData) {
            throw new Error(`No Data found for year ${year}`);
        }

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

        const qualifyingResults = racesData.QualifyingResults;

        const qualifyingEntries: QualifyingResultEntry[] = [];

        for (let i = 0; i < 20; i++) {
            const currentEntry = qualifyingResults[i];
            if (currentEntry === null || currentEntry === undefined) break;

            qualifyingEntries.push({
                number: currentEntry.number,
                position: currentEntry.position,
                driverId: currentEntry.Driver.driverId,
                permanentNumber: currentEntry.Driver.permanentNumber,
                code: currentEntry.Driver.code,
                wikiUrl: currentEntry.Driver.url,
                givenName: currentEntry.Driver.givenName,
                familyName: currentEntry.Driver.familyName,
                dateOfBirth: new Date(currentEntry.Driver.dateOfBirth),
                nationality: currentEntry.Driver.nationality,
                constructor: {
                    id: currentEntry.Constructor.constructorId,
                    wikiUrl: currentEntry.Constructor.url,
                    name: currentEntry.Constructor.name,
                    nationality: currentEntry.Constructor.nationality
                },
                q1: currentEntry.q1,
                q2: currentEntry.q2,
                q3: currentEntry.q3
            });
        }

        const qualData: QualifyingData = {
            season: year,
            round: round,
            wikiUrl: responseData.url,
            circuit: circuitData,
            date: new Date(responseData.date),
            time: responseData.time,
            qualifyingEntries: qualifyingEntries
        }

        Cache.set(key, qualData);

        return qualData;
    }
}