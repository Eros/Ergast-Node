import {CircuitData} from "./CircuitData";
import {TimingsData} from "./TimingsData";

export interface LapsData {
    season: string | number,
    round: number,
    wikiUrl: string,
    raceName: string,
    circuit: CircuitData,
    date: Date,
    time: string,
    number: number,
    timings: TimingsData[]
}