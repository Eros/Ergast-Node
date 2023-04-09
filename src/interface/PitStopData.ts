import {CircuitData} from "./CircuitData";
import {PitStopEntry} from "./PitStopEntry";

export interface PitStopData {
    season: number,
    round: number,
    stop: number,
    circuit: CircuitData,
    totalStops: PitStopEntry[]
}