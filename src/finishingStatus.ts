import {FinishingStatusData} from "./interface/FinishingStatusData";
import axios from "axios";
import {Cache} from "./cache/cache";

export class FinishingStatus {

    public async getForCurrentYear(round: number): Promise<FinishingStatusData[]> {
        return this.getFor(new Date().getFullYear(), round);
    }

    public async getFor(year: string | number, round: number): Promise<FinishingStatusData[]> {

        const key = Cache.generateKey("finishing_status", year, round);
        if (Cache.isEnabled() && Cache.isInCache(key)) {
            return Cache.get(key);
        }

        const response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/status.json`);
        const data = response.data.MRData.StatusTable;

        const finishing = data.Status.slice(0, 3).map((statusData: any, index: number) => ({
                season: data.season,
                round: data.round,
                statusId: index,
                count: statusData.count,
                status: statusData.status
            }));

        Cache.set(key, finishing);

        return finishing;
    }
}