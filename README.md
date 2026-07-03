# Game GUI Framework

A skeleton framework for browser-based GUI games, abstracting the parts that are common to almost any such game — the game loop, state management, canvas rendering, and input handling — so a new game can be built by implementing only its game-specific logic.

This framework grew out of building the web version of [RAD Game](https://github.com/avikpln/rad): partway through, it became clear that the engine/GUI split being used there wasn't specific to that game at all, and could be pulled out into a reusable skeleton.

---

## How to Use This

This repo is meant to be used in two different ways:

- **As a starting point for your own game** — click **[Use this template](../../generate)** to get your own copy with no shared git history, then implement the "virtual" parts (the placeholders meant to be overridden with your game's rules and rendering).
- **As a learning resource** — read through the code to see one way of structuring a browser game's loop, state, and rendering as separate, reusable layers.

If you'd rather contribute back to the framework itself (e.g. adding new abstractions), fork the repo and open a pull request in the usual way.

---

## Built With This Framework

| Game | Description | Links |
|---|---|---|
| **Snake** | The classic Snake game | [Live](https://avikpln.github.io/snake/) · [Code](https://github.com/avikpln/snake) |
| **Cyclic Tag** | A 3-player pursuit-evasion game — chase one opponent while evading another, in a closed loop | [Live](https://avikpln.github.io/cyclic-tag/) · [Code](https://github.com/avikpln/cyclic-tag) |

---

## Architecture

The framework separates a game into two independent layers, communicating through a defined interface:

- **`app/script/game/`** — the game loop and state management: tracks game state, handles updates on each tick, and exposes hooks for game-specific logic, with no rendering or DOM dependencies.
- **`app/script/gui/`** — canvas rendering, the display loop, and event handling (keyboard/mouse input), built on top of the game layer.
- **`app/script/lib/`** — shared utility data structures and algorithms available to any game built on the framework: graph operations, a linked list, a union-find structure, and random number/random walk utilities.

A new game is built by extending the base game and GUI classes with its own rules and rendering, while the loop, state transitions, and input handling are inherited from the framework.

---

## Tech Stack

- **JavaScript** — framework core, game loop, canvas rendering
- **HTML / CSS** — page structure and styling
- **Web Audio** — sound effect support

---

## Project Structure

```
game-gui-framework/
├── app/
│   ├── audio/
│   │   └── stroke.mp3
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   ├── cover.jpg
│   │   └── favicon.ico
│   ├── script/
│   │   ├── game/            # Core game logic
│   │   │   ├── direction.js
│   │   │   ├── game.js
│   │   │   └── position.js
│   │   ├── gui/             # Graphical user interface
│   │   │   ├── canvas.js
│   │   │   ├── displayer.js
│   │   │   ├── events.js
│   │   │   ├── gui.js
│   │   │   └── timer.js
│   │   ├── lib/             # Shared utilities
│   │   │   ├── graph.js
│   │   │   ├── linkedlist.js
│   │   │   ├── random.js
│   │   │   └── unionfind.js
│   │   └── main.js
│   ├── index.html
│   ├── README.md
│   └── TODO.md
├── LICENSE
└── README.md
```

Note: this repo intentionally does not include a root-level `index.html` or a live demo — it's a skeleton meant to be extended, not run as-is. See **Built With This Framework** above for working examples.
