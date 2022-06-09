import renderer from "react-test-renderer";
import Calculator from "../../component/calculator";

describe("Calculator component renders correctly", () => {
  it("calculator page matches snapshot", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
