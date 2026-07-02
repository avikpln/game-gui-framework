/* --- IMPORTS --- */
// import Position from "./position.js";
// import Direction from "./direction.js";

/* --- EXPORTS --- */
export { Game as default };

/*--- CONFIGURATION --- */
const GameConfiguration = {};
// Object.freeze(GameConfiguration);

/* --- ENUM: GameStatus --- */
const GameStatus = {
  IDLE: "IDLE",
  PLAYING: "PLAYING",
  GAME_OVER: "GAME_OVER",
  GAME_WIN: "GAME_WIN",
};
Object.freeze(GameStatus);

/* --- CONSTANTS --- */

/*
 * CLASS: Game
 *****************************************************************************/
const Game = class {
  /// STATE
  #status = Game.Status.IDLE;
  #state = null;

  static CONFIGURATION = GameConfiguration;

  /* --- INNER: Status --- */
  static Status = GameStatus;

  /* --- INNER: State --- */
  static State = class {
    constructor() {}
  };

  /* --- C'TOR: constructor --- */
  constructor() {}

  /* --- METHOD: #setStatus --- */
  #setStatus(status) {
    console.assert(status in Game.Status); // sanity check
    this.#status = status;
  }

  /* --- METHOD: getStatus --- */
  getStatus() {
    return this.#status;
  }

  /* --- METHOD: getState --- */
  getState() {
    return this.#cloneState();
  }

  /// TRANSITION

  /* --- METHOD: play --- */
  play() {
    if (this.getStatus() !== Game.Status.IDLE) {
      console.error(`ERROR: Already started playing`);
      return;
    }
    this.#state = this.#getInitialState();
    this.#setStatus(Game.Status.PLAYING);
  }

  /* --- METHOD: reset --- */
  reset() {
    if (this.getStatus() !== Game.Status.IDLE) {
      this.stop();
    }
    this.play();
  }

  /* --- METHOD: stop --- */
  stop() {
    if (this.getStatus() === Game.Status.IDLE) {
      console.error(`ERROR: Already stopped`);
      return;
    }
    this.#clear();
  }

  // ... PLACE HERE METHODS FOR TRANSITIONING BETWEEN CHANGES WHILE PLAYING ...
  // DON'T FORGET TO CHECK STATUS IN EACH METHOD!

  /* --- METHOD: step --- */
  step() {
    // TODO
  }

  /// AUXILIARY

  /* --- METHOD: #clear --- */
  #clear() {
    this.#setStatus(Game.Status.IDLE);
    this.#state = null;
  }

  /* --- METHOD: #cloneState --- */
  #cloneState() {
    // TODO: Actually clone.
    // return new Game.State(...);
    return this.#state;
  }

  /* --- METHOD: #getInitialState --- */
  #getInitialState() {
    return new Game.State();
  }

  // ... PUT HERE ADDITIONAL AUXILIARY METHODS ...
};
