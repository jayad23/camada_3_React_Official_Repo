import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

import { getValue } from "../App";

expect.extend(matchers);

describe("test function getValue", () => {
  test("tests whether it return 1 or 0", () => {
    const value = getValue("expected");
    expect(value).toBe(1)
  })
})