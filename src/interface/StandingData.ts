import {StandingsDriverData} from "./StandingsDriverData";
import {ConstructorData} from "./ConstructorData";

export interface StandingData {
    year: number,
    position: number,
    points: number,
    wins: number,
    driver: StandingsDriverData,
    constructor: ConstructorData
}