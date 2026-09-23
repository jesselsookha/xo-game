# The X & O Game (Tic Tac Toe!)

> A staged, incremental React Native tutorial that builds a two-player Tic-Tac-Toe game from an empty screen to a fully working board. 
> Designed for MAST2026.

---

## Overview

This project is a **teaching sequence**, not a single finished app. Each stage introduces exactly one new idea — state, navigation, arrays, win detection — and deliberately leaves the "obvious next problem" visible so students feel the need for the next concept before it arrives.

The source material is a walkthrough (originally a Markdown file) with **10 stages (incl. parts)**. The early stages favour repetition and explicit naming over cleverness; the later stages show *why* the refactors matter.

---

## What You'll Build

By the end of the full sequence, a student will have built:

- A **Player Setup Screen** — two text inputs collecting player names.
- A **Game Screen** — a 3×3 board of touchable tiles.
- **Turn tracking** — alternating X and O placement.
- **Win detection** — recognition of rows, columns, and diagonals.
- **A refactored board** using arrays and `.map()` in place of hard-coded repetition.

---

## Project Structure

The app lives in a single `App.tsx` file for most of the sequence. That is intentional — the point is that the file's *shape* stays constant even as the logic grows.

```
App.tsx
├── App()           →  NavigationContainer + Stack.Navigator
├── PlayerScreen()  →  name entry, navigates to Game
├── GameScreen()    →  board, state, handlePress, win logic
└── styles          →  StyleSheet.create (container, title, input,
                       row, cell, cellText)
```

---

## Stage-by-Stage Guide

| Stage | Focus | Key Concept Introduced |
|-------|-------|-------------------------|
| **0** | Empty `View`, full-screen canvas | Shape of a React Native file: imports, component, `StyleSheet.create` |
| **1** | Player Setup Screen | `useState`, controlled inputs, `onPress` arrow functions |
| **2** | Navigation | `NavigationContainer`, `Stack.Navigator`, `route.params` for passing data between screens |
| **3 (Pt 1)** | Board layout | `flexDirection: 'row'`, `TouchableHighlight`, hard-coded 3×3 grid |
| **3 (Pt 2)** | Turn tracking | `player1Turn` boolean state, shared `handlePress`, index parameter |
| **3 (Pt 3)** | First board state | `block1` state, numeric encoding (0 / 1 / 2), derived display content |
| **3 (Pt 4)** | Full board state | Nine `switch` statements — display side complete, update side still broken |
| **4** | Wire up all tiles | Nine `if (index === N)` blocks; each tile now records its own mark |
| **5** | Win detection | Eight winning-line checks with the `&&` operator; winner display |
| **6** | Refactor (state) | Consolidate nine `useState` calls into a single array |
| **7** | Refactor (render) | Replace hard-coded tiles with `.map()` |

---

## The Central Teaching Ideas

1. **State vs. derived values.** `block1…block9` are state (persist between renders). `block1Content…block9Content` are local variables — recalculated on every render from the current state. They can never drift out of sync because they are rebuilt from scratch.

2. **Code placement.** `useState` calls and JSX sit directly in a component's body — they run *every render*. `onPress` handlers are arrow functions defined *every render* but executed *only when pressed*. This distinction only becomes load-bearing once real logic moves into the handlers.

3. **Two separate problems: display and update.** Stage 3, Part 4 deliberately completes the display side while leaving `handlePress` still broken. Stage 4 completes the update side. Keeping these apart means each lesson lands cleanly.

4. **Repetition before refactor.** The nine near-identical `switch` statements and nine `if (index === N)` blocks are not mistakes to be quietly fixed. They are the *reason* the refactors in Stages 6 and 7 matter. Skip the tedium and the lesson disappears.

5. **The re-render chain.** Nothing is manually kept in sync. `handlePress` calls `setBlock1(...)`, React re-renders `GameScreen`, the `switch` runs again, and `block1Content` recalculates. State change → re-render → recalculation.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/jesselsookha/xo-game.git
cd xo-game

# Install dependencies
npm install
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native @react-navigation/native-stack

# Run
npx expo start
```

Scan the QR code with **Expo Go** (iOS/Android) or run in a emulator.

---

## Reading Order

1. Read the file top to bottom once. Notice the shape: imports → `App()` → `PlayerScreen()` → `GameScreen()` → styles.
2. Locate the stage you're on. Compare it to the *previous* stage. Ask: **"What changed?"**
3. Trace the re-render chain for one specific interaction (e.g. "tap tile 4").
4. Only then read the Concept Notes. They assume you've already looked at the code.

---

## Prerequisites

- Basic *JavaScript* & *TypeScript* (variables, functions, arrays, `if`/`else`, `switch`, ternaries, destructuring, arrow functions)
- Familiarity with JSX and React function components (helpful but not required)
- A device or simulator capable of running Expo

---

## Repository

- **Source material:** [`code/02-xo-game.md`](https://github.com/jesselsookha/MAST2026/blob/main/code/02-xo-game.md)
- **Course:** MAST5112 - 2026
- **Date of source publication:** 2026-07-20

---

## A Note on the Name

*Tic-Tac-Toe*, *Noughts and Crosses*, and *X & O* all refer to the same game. The file uses *X & O* in the title and *Tic-Tac-Toe* in the UI text. Feel free to standardise on whichever you prefer in their own builds — nothing in the code depends on the name.