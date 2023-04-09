import axios from 'axios';
import {SeasonData} from './interface/SeasonData';
import {CircuitData} from "./interface/CircuitData";
import {Cache} from "./cache/cache";

export class Seasons {

    /**
     * Gets the current season data.
     * @return an array of {@link SeasonData}
     */
    public async getForCurrentYear(): Promise<SeasonData[]> {
        return this.getForYear(new Date().getFullYear());
    }

    /**
     * Returns the current race data for the year specified.
     * @param year to get the data from.
     * @return an array of {@link SeasonData}
     */
    public async getForYear(year: string | number): Promise<SeasonData[]> {

        const key = Cache.generateKey("seasons", year);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get(`https://ergast.com/api/f1/${year}.json`);
        const racesData = response.data.MRData.RaceTable.Races;

        const seasonData: SeasonData[] = racesData.map((raceData: any) => {
            const circuit: CircuitData = {
                name: raceData.Circuit.circuitName,
                wikiUrl: raceData.Circuit.url,
                id: raceData.Circuit.circuitId,
                lat: parseFloat(raceData.Circuit.Location.lat),
                long: parseFloat(raceData.Circuit.Location.long),
                local: raceData.Circuit.Location.locality,
                country: raceData.Circuit.Location.country
            }

            return {
                season: year,
                round: raceData.round,
                wikiUrl: raceData.url,
                raceName: raceData.raceName,
                circuit: circuit,
                date: new Date(raceData.date),
                time: raceData.time,
                firstPractice: raceData.FirstPractice?.date ? raceData.FirstPractice.date : null,
                secondPractice: raceData.SecondPractice?.date ? raceData.SecondPractice.date : null,
                thirdPractice: raceData.ThirdPractice?.date ? raceData.ThirdPractice.date : null,
                qualifying: raceData.Qualifying?.date ? raceData.Qualifying.date : null,
            };
        });

        Cache.set(key, seasonData);

        return seasonData;
    }
}
