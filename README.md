<h1 align="center">
  <a href="#">
    <img src="https://cdn2.iconfinder.com/data/icons/harry-potter-solid-collection/60/36_-_Harry_Potter_-_Solid_-_Time_Turner-256.png" alt="phase" width="125px">
  </a>
  <br>
  phase-react
</h1>
<h3 align="center">React plugin for the <strong>phase</strong> micro-store/change emitter</h3>
<br>

**phase-react** is the react plugin for [phase](https://github.com/klintmane/phase).

## Features

Exports a hook that allows subscribing to a phase store and path.

## Installation

### npm

`npm i @klintm/phase-react`

## Usage

```js
import Phase from "@klintm/phase";
import { useStore } from "@klintm/phase-react";

const counter = Phase(
  {
    name: "",
    count: 0
  },
  state => ({
    changeName: n => state.set("name", n),
    increment: () => state.set("count", state("count") + 1),
    decrement: () => state.set("count", state("count") - 1)
  })
);

const Counter = () => {
  const state = useStore(counter);
  const { decrement, increment } = state.actions;

  return (
    <div>
      <div>Count: {state("count")}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};
```
