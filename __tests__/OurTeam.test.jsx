import { render, screen } from "@testing-library/react";
import OurTeam from "../src/components/OurTeam";
import "@testing-library/jest-dom";
import { LINKS } from "../src/constants";
describe("Hero", () => {
  it("should render headline text", () => {
    const { getByText } = render(<OurTeam />);
    const headlineText = getByText(/our team/i);
    expect(headlineText).toBeInTheDocument();
  });
  it("should render cards", () => {
    const { getAllByText } = render(<OurTeam />);
    const listCard = getAllByText(/ceo/i);
    expect(listCard).toHaveLength(4);
  });
});
