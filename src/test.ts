import {Seasons} from "./seasons";
import {Driver} from "./driver";
import {Standings} from "./standings";

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
}

test();