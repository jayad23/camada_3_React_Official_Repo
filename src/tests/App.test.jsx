import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testear App", () => {
  it("renders an h1 with a value", () => {
    const person = "Kike";

    render(<App person={person} />)

    expect(
      screen.getByRole("heading", {
        level: 1
      })
    ).toHaveTextContent(`Hola ${person}`);
  })
})