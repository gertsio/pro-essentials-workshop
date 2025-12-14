import { Expect, Equal } from "@total-typescript/helpers";

// CODE

const add = (a: number, b: number) => {
  return a + b;
};

// TESTS

const result = add(1, 2);
console.log(typeof result)

type test = Expect<Equal<typeof result, number>>;

