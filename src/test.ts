import {Seasons} from "./seasons";
import {Driver} from "./driver";
import {Standings} from "./standings";
import {Circuit} from "./circuit";
import {Constructors} from "./constructors";
import {FinishingStatus} from "./finishingStatus";
import {Laps} from "./laps";
import {ErgastNode} from "./ergastNode";

async function test() {
    const season: Seasons = new Seasons();

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

    const driver = new Driver();

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

    const standings = new Standings();

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

    const circuit = new Circuit();

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

    const constructors = new Constructors();

    const constructorForTeam = await constructors.getForTeam('red_bull');
    console.log(constructorForTeam.id);
    console.log(constructorForTeam.wikiUrl);
    console.log(constructorForTeam.name);
    console.log(constructorForTeam.nationality);

    const finishing = new FinishingStatus();
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

    const laps = new Laps();

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

test();