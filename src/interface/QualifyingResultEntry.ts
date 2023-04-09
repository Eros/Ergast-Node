import {ConstructorsData} from "./ConstructorsData";

export interface QualifyingResultEntry {
    number: number,
    position: number,
    driverId: string,
    permanentNumber: number,
    code: string,
    wikiUrl: string,
    givenName: string,
    familyName: string,
    dateOfBirth: Date,
    nationality: string,
    constructor: ConstructorsData,
    q1: string,
    q2: string,
    q3: string
}