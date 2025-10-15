import { merge } from "../src/primoTest";

describe("merge function", () => {
  it("should merge and sort all arrays ascending", () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7, 3, 1];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 6, 7, 9]);
  });

  it("should handle empty arrays", () => {
    const result = merge([], [1, 2, 3], []);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should handle all empty arrays", () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });
});
