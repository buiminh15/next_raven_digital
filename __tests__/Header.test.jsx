import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header";
import "@testing-library/jest-dom";

const NAV_ITEMS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Testimonials",
  "News",
  "Contacts",
];

describe("Header", () => {
  it("renders nav", () => {
    render(<Header />);

    for (const val of NAV_ITEMS) {
      const elText = screen.getAllByText(/home/i);
      expect(elText).toHaveLength(2);
    }
  });

  it("should render logo", () => {
    render(<Header />);
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("logo");
  });
});
