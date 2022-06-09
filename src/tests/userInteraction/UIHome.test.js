import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("1) when the user clicks on Home button", () => {
  it("the home page rendered correctly", () => {
    render(<App></App>);
    userEvent.click(screen.getByRole("link", { name: /home/i }));
    expect(
      screen.getByRole("heading", { name: /welcome to the math magicien/i })
    ).toBeInTheDocument;
  });
});
