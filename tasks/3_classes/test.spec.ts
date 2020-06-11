import test from "ava";
import { BaseCounter, LimitedCounter } from "./index";

test.serial("Test Base Counter", (t) => {
  const counter = new BaseCounter();
  t.is(counter.getValue(), 0);

  counter.increment();
  t.is(counter.getValue(), 1);

  for (let i = 0; i < 10; i++) {
    counter.increment();
  }
  t.is(counter.getValue(), 11);

  counter.reset();
  t.is(counter.getValue(), 0);
});

test.serial("Test Limited Counter", (t) => {
  const counter = new LimitedCounter(3);
  t.is(counter.getValue(), 0);

  counter.increment();
  t.is(counter.getValue(), 1);

  counter.increment();
  t.is(counter.getValue(), 2);

  counter.increment();
  t.is(counter.getValue(), 3);

  counter.increment();
  t.is(counter.getValue(), 3);

  counter.increment();
  t.is(counter.getValue(), 3);

  counter.increment();
  t.is(counter.getValue(), 3);

  counter.reset();
  t.is(counter.getValue(), 0);

  counter.increment();
  t.is(counter.getValue(), 1);
});
