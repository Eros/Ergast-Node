import {FinishingStatusData} from "./interface/FinishingStatusData";
import axios from "axios";

export class FinishingStatus {

    public async getForCurrentYear(round: number): Promise<FinishingStatusData[]> {
        return this.getFor(new Date().getFullYear(), round);
    }

    public async getFor(year: string | number, round: number): Promise<FinishingStatusData[]> {
        const response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/status.json`);
        const data = response.data.MRData.StatusTable;

        return data.Status.slice(0, 3).map((statusData: any, index: number) => ({
            season: data.season,
            round: data.round,
            statusId: index,
            count: statusData.count,
            status: statusData.status
        }));
    }
}