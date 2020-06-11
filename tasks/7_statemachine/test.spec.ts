import test from "ava";
import { VendingMachine, State } from "./index";

test.serial("Vending machine", (t) => {
  const machine = new VendingMachine();

  function testEmptyState() {
    t.is(machine.numItems(), 0);
    t.is(machine.getState(), State.Idle);
    t.is(machine.getCurrentPrice(), -1);
    t.is(machine.finish(), -1);
    t.deepEqual(machine.getItemNames(), []);
  }

  testEmptyState();

  t.is(
    machine.addItem({
      name: "Shouldn't be added",
      price: 12.5,
    }),
    -1
  );

  testEmptyState();

  t.is(machine.start(), 0);

  t.is(machine.getState(), State.Accepting);
  t.is(machine.getCurrentPrice(), 0);
  t.is(machine.finish(), -1);

  t.is(machine.start(), 1);

  machine.addItem({
    name: "Gouda",
    price: 12.5,
  });

  t.is(machine.start(), 1);

  t.is(machine.numItems(), 1);
  t.is(machine.getState(), State.Accepting);
  t.is(machine.getCurrentPrice(), 12.5);
  t.deepEqual(machine.getItemNames(), ["Gouda"]);

  machine.addItem({
    name: "Bread",
    price: 5,
  });

  t.is(machine.numItems(), 2);
  t.is(machine.getState(), State.Accepting);
  t.is(machine.getCurrentPrice(), 17.5);
  t.deepEqual(machine.getItemNames(), ["Bread", "Gouda"]);

  machine.reset();

  testEmptyState();

  t.is(
    machine.addItem({
      name: "Shouldn't be added",
      price: 12.5,
    }),
    -1
  );

  t.is(machine.start(), 0);

  machine.addItem({
    name: "Gouda",
    price: 12.5,
  });
  machine.addItem({
    name: "Bread",
    price: 5,
  });

  t.is(machine.start(), 1);

  t.is(machine.numItems(), 2);
  t.is(machine.getState(), State.Accepting);
  t.is(machine.getCurrentPrice(), 17.5);
  t.deepEqual(machine.getItemNames(), ["Bread", "Gouda"]);

  t.is(machine.finish(), 17.5);

  t.is(machine.numItems(), 2);
  t.is(machine.getState(), State.Finished);
  t.is(machine.getCurrentPrice(), 17.5);
  t.deepEqual(machine.getItemNames(), ["Bread", "Gouda"]);

  t.is(machine.start(), 1);
  t.is(machine.finish(), -1);

  machine.reset();
  testEmptyState();
});
