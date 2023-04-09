# Ergast Node

Small Async NodeJS wrapper for the Ergast API which provides data for the Formula 1 racing series.
See https://ergast.com/mrd/ for more information on their documentation.

# Setup

`npm install axios`

> Minimum supported Node.js version is v14

# Usage

### Seasonal Data

```typescript
import {Seasons} from "./seasons";

const season = new Seasons();

// Data for the current season.
const seasonDataForCurrentYear = await season.getForCurrentYear();

// Data for a specified season.
const seasonForSpecificYear = await season.getForYear(2000);
```

### Driver Data

```typescript
import {Driver} from "./driver";

const driver = new Driver();

// Data for the driver by their permenant number
// their may be some overlaps here due to numbers
// not being unique to all drivers.
const driverByNumber = await driver.getByDriverNumber(33); // Returns Max Verstappen data.

// Data for the driver by their family name.
const driverByName = await driver.getByLastName('Tsunoda'); // Returns Yuki Tsunoda driver data.

```

### Standings Data

```typescript
import {Standings} from "./standings";

const standings = new Standings();

// Data for the year 2000.
const standingsByYear = await standings.getForYear(2000);

// Data for the current year.
const standingsForCurrentYear = await standings.getForCurrentYear();
```