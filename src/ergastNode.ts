import {Circuit} from "./circuit";
import {Constructors} from "./constructors";
import {Driver} from "./driver";
import {FinishingStatus} from "./finishingStatus";
import {Laps} from "./laps";
import {Seasons} from "./seasons";
import {Standings} from "./standings";
import {PitStop} from "./pitStop";
import {Qualifying} from "./qualifying";

export class ErgastNode {

    constructor() { }

    private _circuit?: Circuit;
    private _constructors?: Constructors;
    private _driver?: Driver;
    private _finishingStatus?: FinishingStatus;
    private _laps?: Laps;
    private _seasons?: Seasons;
    private _standings?: Standings;
    private _pitStops?: PitStop;
    private _qualifying?: Qualifying;

    get circuit(): Circuit {
        return this._circuit ||= new Circuit();
    }

    get constructors(): Constructors {
        return this._constructors ||= new Constructors();
    }

    get driver(): Driver {
        return this._driver ||= new Driver();
    }

    get finishingStatus(): FinishingStatus {
        return this._finishingStatus ||= new FinishingStatus();
    }

    get laps(): Laps {
        return this._laps ||= new Laps();
    }

    get seasons(): Seasons {
        return this._seasons ||= new Seasons();
    }

    get standings(): Standings {
        return this._standings ||= new Standings();
    }

    get pitStops(): PitStop {
        return this._pitStops ||= new PitStop();
    }

    get qualifying(): Qualifying {
        return this._qualifying ||= new Qualifying();
    }
}
