/* --- IMPORTS --- */
import Game from "../game/game.js";
import Canvas from "./canvas.js";

/* --- EXPORTS --- */
export { Displayer as default };

/*--- CONFIGURATION --- */
const DisplayerConfiguration = {};
// Object.freeze(DisplayerConfiguration);

/* --- CONSTANTS --- */
const PAUSE_TEXT = "Pause";
const PAUSE_FONT = "bold 32px Cursive";
const PAUSE_COLOR = "red";
const GAME_OVER_TEXT = "Game Over";
const GAME_OVER_FONT = "bold 32px Cursive";
const GAME_OVER_COLOR = "blue";
const GAME_WIN_TEXT = "You Won!";
const GAME_WIN_FONT = "bold 32px Cursive";
const GAME_WIN_COLOR = "blue";

const BACKGROUND_COLOR = "#eee";

/*
 * CLASS: Displayer
 *****************************************************************************/
const Displayer = class {
  #canvas = null;

  static CONFIGURATION = DisplayerConfiguration;

  /* --- C'TOR: constructor --- */
  constructor(canvas) {
    this.#canvas = new Canvas(canvas);
  }

  /* --- METHOD: clear --- */
  clear() {
    this.#canvas.clear();
  }

  /* --- METHOD: displayNone --- */
  displayNone() {
    this.clear();
  }

  /* --- METHOD: displayIdle --- */
  displayIdle() {
    const imageSource = document.querySelector("#cover-image");
    this.#canvas.backgroundImage(imageSource);
  }

  /* --- METHOD: displayPlaying --- */
  displayPlaying(gstate) {
    if (!(gstate instanceof Game.State)) {
      throw TypeError(`input ${gstate} is not a Game.State object`);
    }
    // console.log(gstate);
    // TODO: USE gstate TO DISPLAY GAME

    this.#canvas.fillCanvas(BACKGROUND_COLOR);

    // const [width, height] = this.#canvas.getSize();
    // const [x, y] = [Math.floor(width / 2), Math.floor(height / 2)];
    // const [r0, r1] = [20, 60];
    // const stops = [
    //   [0, "#f00"],
    //   [0.5, "#00f"],
    //   [1, "#0f0"],
    // ];
    // const radGrad = this.#canvas.getRadialGradient(x, y, r0, x, y, r1, stops);
    // this.#canvas.fillCircle(x, y, r1, radGrad);
    // this.#canvas.strokeCircle(x, y, r1, "black");
  }

  /* --- METHOD: #announce --- */
  #announce(text, font, color) {
    const [width, height] = this.#canvas.getSize();
    const textWidth = this.#canvas.measureText(text, font).width;
    this.#canvas.fillText(
      text,
      (width - textWidth) / 2,
      height / 2,
      font,
      color
    );
  }

  /* --- METHOD: displayPaused --- */
  displayPaused() {
    this.#announce(PAUSE_TEXT, PAUSE_FONT, PAUSE_COLOR);
  }

  /* --- METHOD: displayGameOver --- */
  displayGameOver() {
    this.#announce(GAME_OVER_TEXT, GAME_OVER_FONT, GAME_OVER_COLOR);
  }

  /* --- METHOD: displayGameWin --- */
  displayGameWin() {
    this.#announce(GAME_WIN_TEXT, GAME_WIN_FONT, GAME_WIN_COLOR);
  }
};
