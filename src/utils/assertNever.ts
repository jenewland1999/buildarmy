/**
 * See TypeScript handbook on Union Exhaustiveness checking at https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-exhaustiveness-checkinge
 * @param x {never} of type never
 */
export const assertNever = (x: never): never => {
  throw new Error("Unexpected object: " + x);
};
