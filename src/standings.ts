import {StandingData} from "./interface/StandingData";
import axios from "axios";

export class Standings {

    public async getForCurrentYear(): Promise<StandingData[]> {
        return await this.getForYear(new Date().getFullYear());
    }

    /**
     * Gets the standings for the designated year.
     * @param year to get the data from.
     * @return an array of {@link StandingData}
     */
    public async getForYear(year: string | number): Promise<StandingData[]> {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/driverStandings.json`);
        const standingsData = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        return standingsData.map((standing: any, index: number) => ({
            year: new Date(year),
            position: index + 1,
            points: standing.points,
            wins: standing.wins,
            driver: {
                driverId: standing.Driver.driverId,
                permanentNumber: standing.Driver.permanentNumber,
                code: standing.Driver.code,
                wikiUrl: standing.Driver.url,
                givenName: standing.Driver.givenName,
                familyName: standing.Driver.familyName,
                dateOfBirth: new Date(standing.Driver.dateOfBirth),
                nationality: standing.Driver.nationality
            },
            constructor: {
                id: standing.Constructors[0].constructorId,
                wikiUrl: standing.Constructors[0].url,
                name: standing.Constructors[0].name,
                nationality: standing.Constructors[0].nationality
            }
        }));
    }

}