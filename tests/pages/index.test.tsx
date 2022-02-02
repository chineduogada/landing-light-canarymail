import { render, screen } from "../utils/test-utils";
import HomePage from "pages/index";

const setup = () => {
  render(<HomePage />);
};

describe("HomePage", () => {
  it("renders page heading", () => {
    setup();
    expect(
      screen.getByRole("heading", {
        name: /hi there/i,
      })
    ).toBeInTheDocument();
  });
});
