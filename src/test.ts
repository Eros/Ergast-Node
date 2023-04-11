import {Seasons} from "./seasons";
import {Driver} from "./driver";
import {Standings} from "./standings";
import {Circuit} from "./circuit";
import {Constructors} from "./constructors";
import {FinishingStatus} from "./finishingStatus";
import {Laps} from "./laps";
import {ErgastNode} from "./ergastNode";
import {PitStop} from "./pitStop";

async function testSeasons(ergast: ErgastNode) {
    const season: Seasons = ergast.seasons;

    const seasonDataForYear = await season.getForYear(2020);
    for (let seasonDatum of seasonDataForYear) {
        console.log(seasonDatum.season);
        console.log(seasonDatum.round);
        console.log(seasonDatum.wikiUrl);
        console.log(seasonDatum.raceName);
        console.log(seasonDatum.circuit.name);
        console.log(seasonDatum.circuit.id);
        console.log(seasonDatum.circuit.lat);
        console.log(seasonDatum.circuit.long);
        console.log(seasonDatum.circuit.local);
        console.log(seasonDatum.circuit.country);
        console.log(seasonDatum.circuit.wikiUrl);
        console.log(seasonDatum.date);
        console.log(seasonDatum.time);
        console.log(seasonDatum.firstPractice);
        console.log(seasonDatum.secondPractice);
        console.log(seasonDatum.thirdPractice);
        console.log(seasonDatum.qualifying);
    }

    const seasonDataForCurrentYear = await season.getForCurrentYear();
    for (let seasonDatum of seasonDataForCurrentYear) {
        console.log(seasonDatum.season);
        console.log(seasonDatum.round);
        console.log(seasonDatum.wikiUrl);
        console.log(seasonDatum.raceName);
        console.log(seasonDatum.circuit.name);
        console.log(seasonDatum.circuit.id);
        console.log(seasonDatum.circuit.lat);
        console.log(seasonDatum.circuit.long);
        console.log(seasonDatum.circuit.local);
        console.log(seasonDatum.circuit.country);
        console.log(seasonDatum.circuit.wikiUrl);
        console.log(seasonDatum.date);
        console.log(seasonDatum.time);
        console.log(seasonDatum.firstPractice);
        console.log(seasonDatum.secondPractice);
        console.log(seasonDatum.thirdPractice);
        console.log(seasonDatum.qualifying);
    }
}

async function testDriver(ergast: ErgastNode) {
    const driver = ergast.driver;

    const driverByNumber = await driver.getByDriverNumber(33);

    console.log(driverByNumber.name);
    console.log(driverByNumber.permNumber);
    console.log(driverByNumber.totalRaces);
    console.log(driverByNumber.totalPodiums);
    console.log(driverByNumber.totalWins);
    console.log(driverByNumber.totalPodiums);
    console.log(driverByNumber.nationality);
    console.log(driverByNumber.wikiUrl);
    console.log(driverByNumber.dateOfBirth);

    const driverByName = await driver.getByLastName('Hamilton');

    console.log(driverByName.name);
    console.log(driverByName.permNumber);
    console.log(driverByName.totalRaces);
    console.log(driverByName.totalPodiums);
    console.log(driverByName.totalWins);
    console.log(driverByName.totalPodiums);
    console.log(driverByName.nationality);
    console.log(driverByName.wikiUrl);
    console.log(driverByName.dateOfBirth);
}

async function testStandings(ergast: ErgastNode) {
    const standings = ergast.standings;

    const standingsByYear = await standings.getForYear(2020);
    for (let standingDatum of standingsByYear) {
        console.log(standingDatum.year);
        console.log(standingDatum.position);
        console.log(standingDatum.points);
        console.log(standingDatum.wins);
        console.log(standingDatum.driver.driverId);
        console.log(standingDatum.driver.permanentNumber);
        console.log(standingDatum.driver.code);
        console.log(standingDatum.driver.wikiUrl);
        console.log(standingDatum.driver.givenName);
        console.log(standingDatum.driver.familyName);
        console.log(standingDatum.driver.dateOfBirth);
        console.log(standingDatum.driver.nationality);
        console.log(standingDatum.constructor.id);
        console.log(standingDatum.constructor.wikiUrl);
        console.log(standingDatum.constructor.name);
        console.log(standingDatum.constructor.nationality);
    }

    const standingsCurrentYear = await standings.getForCurrentYear();
    for (let standingDatum of standingsCurrentYear) {
        console.log(standingDatum.year);
        console.log(standingDatum.position);
        console.log(standingDatum.points);
        console.log(standingDatum.wins);
        console.log(standingDatum.driver.driverId);
        console.log(standingDatum.driver.permanentNumber);
        console.log(standingDatum.driver.code);
        console.log(standingDatum.driver.wikiUrl);
        console.log(standingDatum.driver.givenName);
        console.log(standingDatum.driver.familyName);
        console.log(standingDatum.driver.dateOfBirth);
        console.log(standingDatum.driver.nationality);
        console.log(standingDatum.constructor.id);
        console.log(standingDatum.constructor.wikiUrl);
        console.log(standingDatum.constructor.name);
        console.log(standingDatum.constructor.nationality);
    }
}

async function testCircuits(ergast: ErgastNode) {
    const circuit = ergast.circuit;

    const circuitForCurrentYear = await circuit.getForCurrentYear(1);
    console.log(circuitForCurrentYear.season);
    console.log(circuitForCurrentYear.round);
    console.log(circuitForCurrentYear.name);
    console.log(circuitForCurrentYear.wikiUrl);
    console.log(circuitForCurrentYear.id);
    console.log(circuitForCurrentYear.lat);
    console.log(circuitForCurrentYear.long);
    console.log(circuitForCurrentYear.local);
    console.log(circuitForCurrentYear.country);

    const circuitForYear = await circuit.getFor(2000, 4);
    console.log(circuitForYear.season);
    console.log(circuitForYear.round);
    console.log(circuitForYear.name);
    console.log(circuitForYear.wikiUrl);
    console.log(circuitForYear.id);
    console.log(circuitForYear.lat);
    console.log(circuitForYear.long);
    console.log(circuitForYear.local);
    console.log(circuitForYear.country);
}

async function testConstructors(ergast: ErgastNode) {
    const constructors = ergast.constructors;

    const constructorForTeam = await constructors.getForTeam('red_bull');
    console.log(constructorForTeam.id);
    console.log(constructorForTeam.wikiUrl);
    console.log(constructorForTeam.name);
    console.log(constructorForTeam.nationality);
}

async function testFinishing(ergast: ErgastNode) {
    const finishing = ergast.finishingStatus;
    const finishingForYear = await finishing.getFor(2000, 3);

    for (let finishingStatusDatum of finishingForYear) {
        console.log(finishingStatusDatum.season);
        console.log(finishingStatusDatum.round);
        console.log(finishingStatusDatum.status);
        console.log(finishingStatusDatum.count);
        console.log(finishingStatusDatum.status);
    }

    const finishingForCurrent = await finishing.getForCurrentYear(1);

    for (let finishingStatusDatum of finishingForCurrent) {
        console.log(finishingStatusDatum.season);
        console.log(finishingStatusDatum.round);
        console.log(finishingStatusDatum.status);
        console.log(finishingStatusDatum.count);
        console.log(finishingStatusDatum.status);
    }
}

async function testLaps(ergast: ErgastNode) {
    const laps = ergast.laps;

    const lapsFor = await laps.getFor(2000, 3, 2);

    console.log(lapsFor.season);
    console.log(lapsFor.round);
    console.log(lapsFor.wikiUrl);
    console.log(lapsFor.raceName);
    console.log(lapsFor.circuit.lat);
    console.log(lapsFor.circuit.long);
    console.log(lapsFor.circuit.season);
    console.log(lapsFor.circuit.country);
    console.log(lapsFor.circuit.round);
    console.log(lapsFor.circuit.id);
    console.log(lapsFor.circuit.wikiUrl);
    console.log(lapsFor.circuit.local);
    console.log(lapsFor.circuit.name);
    console.log(lapsFor.date);
    console.log(lapsFor.time);
    console.log(lapsFor.number);

    for (let timing of lapsFor.timings) {
        console.log(timing.time);
        console.log(timing.position);
        console.log(timing.driverId);
    }
}

async function testPitStops(ergast: ErgastNode) {
    const pitStops = ergast.pitStops;

    const pitStopsForYear = await pitStops.getFor(2014, 4, 1);

    console.log(pitStopsForYear.stop);
    console.log(pitStopsForYear.season);
    console.log(pitStopsForYear.circuit.name);
    console.log(pitStopsForYear.circuit.lat);
    console.log(pitStopsForYear.circuit.long);
    console.log(pitStopsForYear.circuit.local);
    console.log(pitStopsForYear.circuit.country);
    console.log(pitStopsForYear.circuit.id);
    console.log(pitStopsForYear.circuit.wikiUrl);
    console.log(pitStopsForYear.circuit.round);

    const pitStopsForCurrentYear = await pitStops.getForCurrentYear(2, 3);

    console.log(pitStopsForCurrentYear.stop);
    console.log(pitStopsForCurrentYear.season);
    console.log(pitStopsForCurrentYear.circuit.name);
    console.log(pitStopsForCurrentYear.circuit.lat);
    console.log(pitStopsForCurrentYear.circuit.long);
    console.log(pitStopsForCurrentYear.circuit.local);
    console.log(pitStopsForCurrentYear.circuit.country);
    console.log(pitStopsForCurrentYear.circuit.id);
    console.log(pitStopsForCurrentYear.circuit.wikiUrl);
    console.log(pitStopsForCurrentYear.circuit.round);

}

async function testQualifying(ergast: ErgastNode) {
    const qualifying = ergast.qualifying;

    const qualifyingForYear = await qualifying.getFor(2022, 2);

    console.log(qualifyingForYear.season);
    console.log(qualifyingForYear.round);
    console.log(qualifyingForYear.wikiUrl);
    console.log(qualifyingForYear.circuit.name);
    console.log(qualifyingForYear.circuit.lat);
    console.log(qualifyingForYear.circuit.long);
    console.log(qualifyingForYear.circuit.local);
    console.log(qualifyingForYear.circuit.country);
    console.log(qualifyingForYear.circuit.id);
    console.log(qualifyingForYear.circuit.wikiUrl);
    console.log(qualifyingForYear.circuit.round);
    console.log(qualifyingForYear.date.toString());
    console.log(qualifyingForYear.time);

    for (let qualifyingEntry of qualifyingForYear.qualifyingEntries) {
        console.log(qualifyingEntry.number);
        console.log(qualifyingEntry.position);
        console.log(qualifyingEntry.driverId);
        console.log(qualifyingEntry.permanentNumber);
        console.log(qualifyingEntry.code);
        console.log(qualifyingEntry.wikiUrl);
        console.log(qualifyingEntry.givenName);
        console.log(qualifyingEntry.familyName);
        console.log(qualifyingEntry.dateOfBirth.toString());
        console.log(qualifyingEntry.nationality);
        console.log(qualifyingEntry.constructor.id);
        console.log(qualifyingEntry.constructor.wikiUrl);
        console.log(qualifyingEntry.constructor.name);
        console.log(qualifyingEntry.constructor.nationality);
        console.log(qualifyingEntry.q1);
        console.log(qualifyingEntry.q2);
        console.log(qualifyingEntry.q3);
    }
}

async function testAll() {
    const ergast: ErgastNode = new ErgastNode();

    await testSeasons(ergast);
    await testDriver(ergast);
    await testStandings(ergast);
    await testCircuits(ergast);
    await testConstructors(ergast);
    await testLaps(ergast);
    await testPitStops(ergast);
    await testQualifying(ergast);
}

testAll().then(r => console.log('All tests completed.'));