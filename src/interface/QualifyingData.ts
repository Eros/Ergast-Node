import {CircuitData} from "./CircuitData";
import {QualifyingResultEntry} from "./QualifyingResultEntry";

export interface QualifyingData {
    season: number | string,
    round: number,
    wikiUrl: string,
    circuit: CircuitData,
    date: Date,
    time: string,
    qualifyingEntries: QualifyingResultEntry[]
}