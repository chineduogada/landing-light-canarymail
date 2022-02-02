import { render, screen } from "../utils/test-utils";
import HomePage from "pages/index";

const setup = () => {
  render(<HomePage />);
};

describe("HomePage", () => {
  it("renders page Header Navbar correctly", () => {
    setup();

    const navList = ["TRIPS", "RECENTLY", "VIEWED BOOKINGS"];

    navList.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(
      screen.getByRole("img", { name: "user-avatar" })
    ).toBeInTheDocument();
  });
});
