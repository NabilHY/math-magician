/* eslint-disable no-unused-expressions */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("1) when the user clicks on Home button", () => {
  it("the home page rendered correctly", () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name: /home/i }));
    expect(
      screen.getByRole("heading", { name: /welcome to the math magicien/i })
    ).toBeInTheDocument;
  });
});

describe("2) User clicks on Calculator button", () => {
  it("the Calculator page rendered correctly", () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name: /calculator/i }));
    expect(screen.getByRole("heading", { name: /let's do some math/i }))
      .toBeInTheDocument;
  });
});

describe("3) User clicks on Quote button", () => {
  it("the quote page rendered correctly", () => {
    render(<App />);
    userEvent.click(screen.getByRole("link", { name: /quote/i }));
    expect(
      screen.getByRole("heading", {
        name: /mathematics is not about numbers, equations, computaions, or algorithms: it is about understanding\. william paul thurston/i,
      })
    ).toBeInTheDocument;
  });
});
