import { CircuitData } from "./CircuitData";

export interface SeasonData {
    season: string,
    round: number,
    wikiUrl: string,
    raceName: string,
    circuit: CircuitData,
    date: Date,
    time: string,
    firstPractice?: Date,
    secondPractice?: Date,
    thirdPractice?: Date,
    qualifying?: Date
}