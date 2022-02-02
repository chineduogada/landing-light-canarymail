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

  it("renders main content correctly", () => {
    setup();

    expect(
      screen.getByRole("heading", { name: /payment information/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/choose your method of payment./i)
    ).toBeInTheDocument();
    expect(screen.getByTestId("card-view")).toBeInTheDocument();
  });

  it("renders checkout card form correctly", () => {
    setup();

    expect(screen.getByLabelText(/credit card number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/expiration date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/security code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/postal code/i)).toBeInTheDocument();
    expect(
      screen.getByText(/use this card for next time purchase/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add card/i })
    ).toBeInTheDocument();
  });
});
