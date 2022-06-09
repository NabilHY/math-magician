import operate from "../../../logic/operate";

describe("operate function operates correctely", () => {
  test("numbers are summed correctely", () => {
    const sum = operate(5, 5, "+");
    expect(sum).toBe("10");
  });
  test("numbers are substracted correctely", () => {
    const substract = operate(5, 5, "-");
    expect(substract).toBe("0");
  });

  test("numbers are substracted correctely", () => {
    const multiply = operate(5, 5, "x");
    expect(multiply).toBe("25");
  });
  test("numbers are substracted correctely", () => {
    const divide = operate(5, 5, "÷");
    expect(divide).toBe("1");
  });
});
