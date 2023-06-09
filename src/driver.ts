import {DriverCareerData} from "./interface/DriverCareerData";
import axios from "axios";
import {Cache} from "./cache/cache";

export class Driver {

    /**
     * Search for the drivers information via their
     * permanent number.
     * @param num of their driver.
     */
    public async getByDriverNumber(num: number): Promise<DriverCareerData> {
        return await this.getByInput(num);
    }

    /**
     * Search for the drivers information via their
     * last name, also known as family name.
     * @param lastName to search for.
     */
    public async getByLastName(lastName: string): Promise<DriverCareerData> {
        return await this.getByInput(lastName);
    }

    /**
     * Searches the input to try and find a driver by
     * the data provided. Note: last name is more accurate
     * than driver number, as there may be overlapping driver numbers.
     * @param input either the driver number or the drivers last name.
     * @return generated data of the drivers information.
     * @private
     */
    private async getByInput(input: string | number): Promise<DriverCareerData> {
        const key = Cache.generateKey("driver", input);

        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get('https://ergast.com/api/f1/current/drivers.json');
        const drivers = response.data.MRData.DriverTable.Drivers;

        const inputStr = String(input).toLowerCase();

        const possibleDriver = drivers.find((d: any) => (d.permanentNumber && String(d.permanentNumber).toLowerCase() === inputStr) || d.familyName.toLowerCase() === inputStr);

        const driverStatsResponse = await axios.get(`https://ergast.com/api/f1/drivers/${possibleDriver.driverId}/results.json`);
        const results = driverStatsResponse.data.MRData.RaceTable.Races;


        const driverData: DriverCareerData = {
            name: possibleDriver.givenName + possibleDriver.familyName,
            permNumber: possibleDriver.permanentNumber,
            totalRaces: results.length,
            totalPodiums: this.getTotalPodiums(results),
            totalWins: this.getTotalWins(results),
            nationality: possibleDriver.nationality,
            wikiUrl: possibleDriver.url,
            dateOfBirth: new Date(possibleDriver.dateOfBirth)
        };

        Cache.set(key, driverData);

        return driverData;
    }

    /**
     * Takes the inputted results and searches
     * for the drivers final position to see
     * if it's between 1 and 3.
     * @param results from the api to insert.
     * @private
     */
    private getTotalPodiums(results: any[]): number {
        let totalPodiums = 0;

        for (let result of results) {
            for (let res of results) {
                const pos = parseInt(res.position);
                if (pos >= 1 && pos <= 3) {
                    totalPodiums++;
                }
            }
        }

        return totalPodiums;
    }

    /**
     * Takes the inputted results and searches
     * for the drivers final position to see
     * if it's 1.
     * @param results from the api to insert.
     * @private
     */
    private getTotalWins(results: any[]): number {
        let totalWins = 0;
        for (let result of results) {
            for (let res of results) {
                if (res.position === '1') {
                    totalWins++;
                }
            }
        }

        return totalWins;
    }
}