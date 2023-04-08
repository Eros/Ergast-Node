import axios from 'axios';
import { SeasonData } from './interface/SeasonData';
import {CircuitData} from "./interface/CircuitData";

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
        const response = await axios.get(`https://ergast.com/api/f1/${year}.json`);
        const racesData = response.data.MRData.RaceTable.Races;

        const circuit: CircuitData = {
            name: racesData.Circuit.circuitName,
            wikiUrl: racesData.Circuit.url,
            id: racesData.Circuit.circuitId,
            lat: Number.parseFloat(racesData.Circuit.Location.lat),
            long: Number.parseFloat(racesData.Circuit.Location.long),
            local: racesData.Circuit.Location.locality,
            country: racesData.Circuit.Location.country
        }

        return racesData.map((racesData: any) => ({
            season: year,
            round: racesData.round,
            wikiUrl: racesData.wikiUrl,
            raceName: racesData.raceName,
            circuit: circuit,
            date: new Date(racesData.date),
            time: racesData.time,
            firstPractice: new Date(racesData.FirstPractice.date),
            secondPractice: new Date(racesData.SecondPractice.date),
            thirdPractice: new Date(racesData.ThirdPractice.data),
            qualifying: new Date(racesData.Qualifying.date)
        }));
    }

   
}
