# Ergast Node

Small Async NodeJS wrapper for the Ergast API which provides data for the Formula 1 racing series.
See https://ergast.com/mrd/ for more information on their documentation.

# Install

`npm install @rapidthenerd/ergast-ts`

[Npm link](https://www.npmjs.com/package/@rapidthenerd/ergast-ts?activeTab=readme)

# Setup

`npm install axios`

`npm intsall -D @types/node-cache`

> Minimum supported Node.js version is v14

# Usage

```typescript
import {ErgastNode} from "./ergastNode";

class Example {
    
    private readonly ergast: ErgastNode = new ErgastNode();
    
    public exampleCircuit() {
        this.ergast.circuit.getForCurrentYear(3);
        this.ergast.circuit.getFor(2000, 3);
    }
    
    public exampleConstructor() {
        this.ergast.constructor.getForTeam('red_bull');
    }
    
    public exampleDriver() {
        this.ergast.driver.getByLastName('Tsunoda');
        this.ergast.driver.getByDriverNumber(33);
    }
    
    public exampleFinishingStatus() {
        this.ergast.finishingStatus.getFor(2000, 3);
        this.ergast.finishingStatus.getForCurrentYear(3);
    }
    
    public exampleLaps() {
        this.ergast.laps.getFor(2000, 2, 1);
        this.ergast.laps.getForCurrentYear(2, 1);
    }
    
    public examplePitstops() {
        this.ergast.pitStops.getFor(2000, 2, 1);
    }
    
    public exampleQualifying() {
        this.ergast.qualifying.getFor(2000, 2);
    }
    
    public exampleSeasons() {
        this.ergast.seasons.getForYear(2000);
        this.ergast.seasons.getForCurrentYear();
    }
    
    public exampleStandings() {
        this.ergast.standings.getFor(2000);
        this.ergast.standings.getForCurrentYear();
    }
}
```